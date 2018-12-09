import { MovieService, Movie } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-lookup',
  templateUrl: './movie-lookup.component.html',
  styleUrls: ['./movie-lookup.component.scss']
})
export class MovieLookupComponent implements OnInit {

  title: string;
  movie: Movie;

  submitted = false;
  error: string;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    this.title = this.title.trim();
    if (!!this.title) {
      this.searchMoviesByTitle();
    } else {
      this.error = 'Please Input A Title';
    }
  }

  searchMoviesByTitle() {
    this.movieService.findMovie(this.title).pipe(
      take(1)
    ).subscribe(res => {
      this.movie = res;
    }, error => {
      this.error = 'No Movie Found for that Title';
    });
  }

}
