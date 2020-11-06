import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Origin': '*',
  }

  readonly requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  private _url: string = "http://localhost:8000/api/movies";
  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<IMovie[]>{
    return this.http.get<IMovie[]>(this._url, this.requestOptions);
  }
  
}
