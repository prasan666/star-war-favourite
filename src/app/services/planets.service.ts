import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Planet, Planets } from '../planet.interface';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  resetFavourites: any = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  getPlanets(nextApi: string): Observable<Planets> {
    if (nextApi) {
      return this.http.get<Planets>(nextApi)
    } else {
      return this.http.get<Planets>('https://swapi.dev/api/planets/?page=1');
    }
  }

  planetSearch(search: string): Observable<Planets> {
    return this.http.get<Planets>('https://swapi.dev/api/planets/?search=' + search)
  }

  getFavourites(): Planet[] {
    return JSON.parse(localStorage.getItem('favourites')) || [];
  }

  clearFavourites() : void {
    localStorage.clear();
    this.resetFavourites.next(true);
  }
}
