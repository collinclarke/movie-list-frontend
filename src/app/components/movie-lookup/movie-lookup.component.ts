import { MovieService, OMDBMovie, Movie } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-lookup',
  templateUrl: './movie-lookup.component.html',
  styleUrls: ['./movie-lookup.component.scss']
})
export class MovieLookupComponent implements OnInit {

  title: string;
  rating: number;
  comment: string;
  movie: OMDBMovie;

  errors = {
    save: '',
    search: ''
  };

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
  }

  onSubmitSearch() {
    this.title = this.title.trim();
    if (!!this.title) {
      this.searchMoviesByTitle();
    } else {
      this.errors.search = 'Please Input A Title';
    }
  }

  searchMoviesByTitle() {
    this.movieService.findMovie(this.title).pipe(
      take(1)
    ).subscribe(res => {
      this.movie = res;
      console.log(this.movie);
    }, error => {
      this.errors.search = 'No Movie Found for that Title';
    });
  }

  prepareAndSubmitMovie() {
    const { rating, comment, movie } = this;
    const { Title } = movie;
    const favMovie: Movie = {
      rating,
      comment,
      title: Title
    };
    this.submitMovie(favMovie);
  }

  private submitMovie(movie: Movie) {
    this.movieService.addMovie(movie).pipe(
      take(1)
    ).subscribe(res => {
      console.log(res);
    }, error => {
      console.error(error);
    });
  }

}
