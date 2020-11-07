import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  public movies = [];
  public id: string;

  constructor(private router: Router, private _movieService: MovieService) { }

  ngOnInit(): void {
    this._movieService.getAllMovies()
        .subscribe(data => this.movies = data);
  }

  onDelete(id){
    this._movieService.deleteMovie(id)
        .subscribe(data => {
            console.log(data);
        }
    );
    this.ngOnInit();
  }

  onLike(movie){
    this._movieService.addLike(movie)
        .subscribe(data => {
          console.log(data);
        }
    );
    this.ngOnInit();
  }

  onDislike(movie){
    this._movieService.disLike(movie)
        .subscribe(data => {
          console.log(data);
        }
    );
    this.ngOnInit();
  }

}
