import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Planet } from '../planet.interface';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styleUrls: ['./planet-card.component.scss']
})
export class PlanetCardComponent implements OnInit {
  @Input() planet: any;
  @Output() removeFovourite = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 
   * @param planet takes the planet as input to remove or add and set's the isFavourite boolean flag
   */
  addRemoveToFavourite(planet: Planet) {
    const temp: Planet[] = JSON.parse(localStorage.getItem('favourites')) || [];
    if (planet.isFavourite) {
      planet.isFavourite = false
      const ind: number = temp.findIndex(d => d.name === planet.name)
      temp.splice(ind, 1);
      this.removeFovourite.emit(ind)
    } else {
      planet.isFavourite = true
      temp.push(planet)
    }
    localStorage.setItem('favourites', JSON.stringify(temp))
  }
}
