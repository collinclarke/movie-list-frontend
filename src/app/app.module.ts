import { MovieService } from './services/movie.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieLookupComponent } from './components/movie-lookup/movie-lookup.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieLookupComponent,
    MovieListComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
