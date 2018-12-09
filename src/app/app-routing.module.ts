import { MovieLookupComponent } from './components/movie-lookup/movie-lookup.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
  {
    path: 'search', component: MovieLookupComponent,
  },
  {
    path: 'list', component: MovieListComponent,
  },
  {
    path: '', redirectTo: 'search', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
