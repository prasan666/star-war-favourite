import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PlanetsService } from '../services/planets.service';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Planet, Planets } from '../planet.interface';

// marks the isFavourite flag for the planets added to favourites
const markFavourites = (favourites, d) => {
  if (favourites.includes(d.name)) {
    d.isFavourite = true;
  } else {
    d.isFavourite = false
  }
  return d
}

@Component({
  selector: 'app-planets-list',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})


export class PlanetsListComponent implements OnInit {
  planets: Planet[] = [];
  searchString: string;
  searchTerm$ = new Subject<string>();
  loading = false
  nextApi: string = "https://swapi.dev/api/planets/?page=1";
  constructor(private planetService: PlanetsService) { }

  ngOnInit() {
    // listen to searchTerm subject for search input(server side search)
    this.searchPlanet();
  }

  /**
   * checks if nextApi is present, if not returns
   * if api present get planets and mark for the favourite ones and concat to the previous array
   * for the infinite scroll
   */
  getPlanets(): void {
    let favourites: string[] = (this.planetService.getFavourites()).map(d => d.name);
    if (!this.nextApi) return
    this.loading = true;
    this.planetService.getPlanets(this.nextApi)
      .pipe(
        map(d => {
          this.nextApi = d.next
          return d.results.map(d => markFavourites(favourites, d))
        })
      )
      .subscribe((res: any) => {
        this.loading = false;
        this.planets = [...this.planets].concat(res);
      }, (err) => {
        this.loading = false;
      })
  }

  /**
   * subscribes to the searchTerm and get's the search data and set's the nextApi
   */
  searchPlanet() {
    let favourites: string[] = (this.planetService.getFavourites()).map(d => d.name);
    this.searchTerm$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((d: string) => {
        this.loading = true;
        return this.planetService.planetSearch(d)
      }),
      map((d: Planets) => {
        // set next api if scrolled
        this.nextApi = d.next;
        // mark for favourites
        return d.results.map(planet => markFavourites(favourites, planet))
      })
    ).subscribe((res: Planet[]) => {
      this.planets = res;
      this.loading = false;
    }, (error) => {
      this.loading = false
    })
  }

  /**
   * on scrolling to the bottom of the anchor div in infinite scroll
   * this function is called
   */
  onScroll() {
    this.getPlanets();
  }
}


