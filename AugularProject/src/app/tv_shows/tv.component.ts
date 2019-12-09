import { Component } from '@angular/core';
import { ITvs } from '../second_product_inter';
//import { TvService } from '../tv.service';
import { MovieService } from '../app.service';


@Component({
  templateUrl: './tv.component.html'
})
export class TvComponent {
  shows: ITvs[] = [];
//implements our service in this component
  constructor(private movieService: MovieService){
  }

  ngOnInit() : void {

    this.movieService.getTv().subscribe(tvObserved => {
      this.shows = tvObserved;
    })

  }

}