import { Component } from '@angular/core';
import { IMovies } from '../products_inter';
import { MovieService } from '../app.service';

@Component({
  templateUrl: './movies.component.html'
})
export class MovieComponent {
  movies: IMovies[] = [];
//implements the service we created
  constructor(private movieService: MovieService){
  }
//implements the function created
  ngOnInit() : void {

    this.movieService.getMovies().subscribe(prodObserved => {
      this.movies = prodObserved;
    })

  }

}