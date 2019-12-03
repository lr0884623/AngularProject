import { Component } from '@angular/core';
import { ITvs } from '../second_product_inter';
import { TvService } from '../tv.service';


@Component({
  templateUrl: './tv.component.html'
})
export class TvComponent {
  shows: ITvs[] = [];

  constructor(private tvService: TvService){
  }

  ngOnInit() : void {

    this.tvService.getTv().subscribe(tvObserved => {
      this.shows = tvObserved;
    })

  }

}