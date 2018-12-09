import { MovieService, Movie } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.getAllMovies();
  }

  getAllMovies() {
    this.movieService.getMovies().pipe(
      take(1)
    ).subscribe(res => {
      this.movies = res;
    });
  }

}
