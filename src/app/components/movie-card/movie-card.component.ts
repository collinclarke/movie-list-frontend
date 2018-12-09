import { Component, Input, OnChanges } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges {
  @Input() movie: Movie;
  newReview: Movie;
  edit: boolean;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnChanges() {
    this.newReview = Object.assign({}, this.movie);
  }

  updateMovie() {
    this.movieService.updateMovie(this.newReview).pipe(
      take(1)
    ).subscribe(res => {
      this.edit = false;
      this.movie = res;
    });
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.movie.id).pipe(
      take(1)
    ).subscribe(res => {
      alert('Review Deleted');
      this.edit = false;
      this.movie = null;
    });
  }

}
