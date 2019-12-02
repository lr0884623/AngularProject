import { IMovies } from './products_inter';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class MovieService {
    constructor(private http: HttpClient){}

moviesUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=6519456089dab62904e1681c170ceeb6&language=en-US&page=1";

    getMovies() : Observable<IMovies[]>{
        return this.http.get<IMovies[]>(this.moviesUrl)
    }
}