import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public movies = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getAllMovies()
        .subscribe(data => this.movies = data);
  }

}
