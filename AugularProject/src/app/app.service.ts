//makes one injectable for the whole web app

import { IMovies } from './products_inter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITvs } from './second_product_inter';

@Injectable({
    providedIn: 'root'
})
//makes one class and therefore only requires one constructor
export class MovieService {
    constructor(private http: HttpClient){}
//implement both api calls and
//then makes two functions for both
moviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=6519456089dab62904e1681c170ceeb6&language=en-US&page=1";

TvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=6519456089dab62904e1681c170ceeb6&language=en-US&page=1";

    getTv() : Observable<ITvs[]>{
    return this.http.get<ITvs[]>(this.TvUrl)
    }

    getMovies() : Observable<IMovies[]>{
        return this.http.get<IMovies[]>(this.moviesUrl)
    }
}


//import { HttpClient } from '@angular/common/http';
//import { Injectable } from '@angular/core';
//import { ITvs } from './second_product_inter';
//import { Observable } from 'rxjs';


//@Injectable({
   // providedIn: 'root'
//})

//export class TvService {
    ///constructor(private http: HttpClient){}

    
//}
//}