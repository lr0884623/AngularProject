export interface IMovies{
//makes one of the interfaces for the movie data
    popularity: number;
    vote_count: number;
   
    video: false;
   
    poster_path: string;
    id: number;
    
    adult: false;
    
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: [number];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}