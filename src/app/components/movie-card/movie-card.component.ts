import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Movie, MovieService } from '../../services/movie.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges {
  @Input() movie: Movie;
  @Output() deleted = new EventEmitter<boolean>();
  newReview: Movie;
  edit: boolean;

  // For future, move movie review form to it's own component and validate/sanitize input

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
    confirm('Are you sure you want to delete this review?');
    this.movieService.deleteMovie(this.movie.id).pipe(
      take(1)
    ).subscribe(res => {
      this.edit = false;
      this.movie = null;
      this.deleted.next(true);
    });
  }

}
