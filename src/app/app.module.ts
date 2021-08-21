import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { PlanetCardComponent } from './planet-card/planet-card.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';
import { PlanetFavouriteComponent } from './planet-favourite/planet-favourite.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetCardComponent,
    PlanetsListComponent,
    SearchPipe,
    PlanetFavouriteComponent,
    InfiniteScrollComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
