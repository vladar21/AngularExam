import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _url: string = "http://localhost:8000/api/movies";
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url);
  }
}
