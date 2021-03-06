

import { Component } from '@angular/core';
import { MovieService } from '../app.service';
import { ITvs } from '../second_product_inter';
import { IMovies } from '../products_inter';

@Component({
  templateUrl: './searchresults.component.html'
})
export class SearchresultsComponent {
  shows: ITvs[] = [];
  movies: IMovies[] = [];
//implements the service we created for both movie and tv shows
  constructor(private movieService: MovieService){
  }
//implements both the functions
  ngOnInit() : void {

    this.movieService.getMovies().subscribe(prodObserved => {
      this.movies = prodObserved;
    })


    this.movieService.getTv().subscribe(tvObserved => {
      this.shows = tvObserved;
    })

  }
}



//import { Component } from '@angular/core';

//@Component({
 // selector: 'app-searchresults',
 // templateUrl: './searchresults.component.html',
 // styleUrls: ['./searchresults.component.css']
//})
//export class SearchresultsComponent {

  //constructor() { }

 // ngOnInit() {
 // }

//}
