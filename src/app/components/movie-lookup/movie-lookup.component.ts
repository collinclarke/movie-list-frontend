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
  review: Movie;

  submitting: boolean;
  errors = {
    save: '',
    search: ''
  };

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    // TODO add route reader here to check queryparams for movie title and search
  }

  onSubmitSearch() {
    if (this.title) this.title = this.title.trim();
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
      this.review = null;
      this.errors.search = '';
      this.searchReviewByTitle(res.Title);
    }, error => {
      this.errors.search = 'No Movie Found for that Title';
    });
  }

  searchReviewByTitle(title: string) {
    this.movieService.findMovieByTitle(title).pipe(
      take(1),
    ).subscribe(res => {
      this.review = res;
    }, error => {
      this.review = null;
    });
  }

  prepareAndSubmitMovie() {
    this.submitting = true;
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
      this.review = res;
    }, error => {
      console.error(error);
    });
  }

}
