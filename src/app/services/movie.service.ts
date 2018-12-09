import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  omdbUrl = 'http://www.omdbapi.com/';

  constructor(
    private api: ApiService,
    private http: HttpClient
  ) { }


  findMovie(title: string): Observable<OMDBMovie> {
    return this.http.get<OMDBMovie>(`${this.omdbUrl}?t=${title}&apikey=${environment.omdb_api_key}`).pipe(
      map((res: any) => {
        if (res.Error) {
          throw new Error(res.Error);
        } else {
          return res;
        }
      })
    );
  }

  getMovies(): Observable<Movie[]> {
    return this.api.get('/movies');
  }

  getMovie(id: string): Observable<Movie> {
    return this.api.get('/movies/' + id);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.api.post('/movies', movie);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.api.patch('/movies/' + movie.id, movie);
  }

  deleteMovie(id: string): Observable<Movie> {
    return this.api.delete('/movies/' + id);
  }


}

export interface OMDBMovie {
  Poster?: string;
  Year: string;
  Title: string;
  Plot: string;
}

export interface Movie {
  comment: string;
  rating: number;
  title: string;
  id?: string;
}
