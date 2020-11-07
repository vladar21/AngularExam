import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' },
  { path: 'all', component: AllMoviesComponent },
  { path: 'add', component: AddMovieComponent },
  { path: 'delete/:id', redirectTo: 'all' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddMovieComponent, AllMoviesComponent]
