import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  deleteMovie(id: string){
    const deleteurl = this._url + '/' + id;
    let httpParams = new HttpParams().set('id', id);
    let options = {params: httpParams};
    return this.http.delete(deleteurl, options);
  }

  addLike(movie) {
    const updateurl = this._url + '/update/' + movie.id;

    if(!parseInt(movie.like)){
      movie.like = 1;
    }
    else {
      movie.like = (parseInt(movie.like) + 1).toString();
    }

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('like', movie.like);
    return this.http.post(updateurl, body, {
      headers: myheader,
    });
  }

  disLike(movie) {
    const updateurl = this._url + '/update/' + movie.id;

    if(!parseInt(movie.dislike)){
      movie.dislike = 1;
    }
    else {
      movie.dislike = (parseInt(movie.dislike) + 1).toString();
    }

    const myheader = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    let body = new HttpParams();
    body = body.set('dislike', movie.dislike);
    return this.http.post(updateurl, body, {
      headers: myheader,
    });
  }

  addMovie(formdata) {
      this.http.post('http://localhost:4000/api/create-user', formdata).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )

  }

}
