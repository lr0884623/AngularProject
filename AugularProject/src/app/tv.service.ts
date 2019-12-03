
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITvs } from './second_product_inter';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class TvService {
    constructor(private http: HttpClient){}

    TvUrl = "https://api.themoviedb.org/3/tv/popular?api_key=6519456089dab62904e1681c170ceeb6&language=en-US&page=1";

    getTv() : Observable<ITvs[]>{
    return this.http.get<ITvs[]>(this.TvUrl)
    }
}