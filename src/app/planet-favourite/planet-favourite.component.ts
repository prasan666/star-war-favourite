import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Planet } from '../planet.interface';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planet-favourite',
  templateUrl: './planet-favourite.component.html',
  styleUrls: ['./planet-favourite.component.scss']
})
export class PlanetFavouriteComponent implements OnInit {
  favourites: Planet[] = [];
  searchString: string
  resetSub: Subscription;
  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
    this.favourites = this.planetService.getFavourites();
    // reset the favourites array when global reset is called
    this.resetSub = this.planetService.resetFavourites.subscribe(() => {
      this.favourites = []
    })
  }

  /**
   * 
   * @param index takes index of the planet that needs to be removed from the favourites array
   */
  removeFovourite(index: number) {
    this.favourites.splice(index, 1);
  }

  ngOnDestroy() {
    if (this.resetSub) this.resetSub.unsubscribe();
  }

}
