import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { RouterModule } from '@angular/router'
import { TvComponent } from './tv_shows/tv.component';
import { MovieComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchresultsComponent, TvComponent, MovieComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path: 'app', component: SearchresultsComponent},
      {path: 'movies', component: MovieComponent},
      {path: 'tv', component: TvComponent},
      {path: '', redirectTo: 'app', pathMatch: 'full'},
      {path: "**", redirectTo: 'app', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
