import { Component } from '@angular/core';
import { IMovies } from '../products_inter';
import { MovieService } from '../app.service';

@Component({
  templateUrl: './movies.component.html'
})
export class MovieComponent {
  movies: IMovies[] = [];

  constructor(private movieService: MovieService){
  }

  ngOnInit() : void {

    this.movieService.getMovies().subscribe(prodObserved => {
      this.movies = prodObserved;
    })

  }

}