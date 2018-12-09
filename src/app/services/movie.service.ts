import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  omdbUrl = 'http://www.omdbapi.com/';

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }


  findMovie(title: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.omdbUrl}?t=${title}`);
  }

  getMovies() {
    return this.api.get('/movies');
  }

  getMovie(id: string) {
    return this.api.get('/movies/' + id);
  }

  addMovie(movie: Movie) {
    return this.api.post('/movies', movie);
  }

  updateMovie(movie: Movie) {
    return this.api.patch('/movies/' + movie.id, movie);
  }

  deleteMovie(id: string) {
    return this.api.delete('/movies/' + id);
  }


}

export interface Movie {
  comment: string;
  rating: number;
  title: string;
}
