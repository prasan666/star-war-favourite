import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanetFavouriteComponent } from './planet-favourite/planet-favourite.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: PlanetsListComponent,
  },
  {
    path: 'favourite',
    component: PlanetFavouriteComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
