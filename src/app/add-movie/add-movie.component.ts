import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { MovieService } from '../movie.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'add-movie',
  template: `

  <div class="container">

      <div class="row">
        <div class="col-md-8" style="margin-right:auto; margin-left:auto;">
          <div style="text-align:center;">
          <h3>Add new movie</h3>
          </div>
          <form [formGroup]="form" (ngSubmit)="submitForm()" enctype="multipart/form-data">

            <div class="mb-3">
              <label for="title">Title</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">#</span>
                </div>
                <input type="text" class="form-control" id="title" placeholder="Title" required="true" formControlName="title">
                <div class="invalid-feedback" style="width: 100%;">Title is required
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="director">Director</label>
              <input type="text" class="form-control" id="director" placeholder="Director" required="true" formControlName="director">
              <div class="invalid-feedback">
                Director is required.
              </div>
            </div>

            <div class="mb-3">
              <label for="year">Year</label>
              <input type="text" class="form-control" id="year" placeholder="Year" required="true" formControlName="year">
              <div class="invalid-feedback">
                Year is required.
              </div>
            </div>

            <div class="mb-3">
              <label for="poster">Poster</label>
              <input type="file" class="form-control" id="poster" placeholder="poster" required="true" (change)="uploadFile($event)">
              <div class="invalid-feedback">
                Please attach a poster of movie.
              </div>
            </div>


            <hr class="mb-2">
            <button class="btn btn-primary btn-lg btn-block" type="submit">Add new movie's details</button>
          </form>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class AddMovieComponent implements OnInit {

  form: FormGroup;

  constructor(private _movieService: MovieService, public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      title: [''],
      director: [''],
      year: [''],
      poster: [null]
    })
   }

  ngOnInit(): void {

  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      poster: file
    });
    this.form.get('poster').updateValueAndValidity()
  }

  submitForm() {

    const myheader = new HttpHeaders().set('Content-Type', 'enctype');
    // let body = new HttpParams();
    // body = body.set('title', this.form.get('title').value);
    // body = body.set('director', this.form.get('director').value);
    // body = body.set('poster', this.form.get('poster').value);

    var form = new FormData();
    form.append("title", this.form.get('title').value);
    form.append("director", this.form.get('director').value);
    form.append("year", this.form.get('year').value);
    form.append("poster", this.form.get('poster').value);

    console.log("file " + (this.form.get('poster').value).name);
    console.log("form " + form);

    this.http.post('http://localhost:8000/api/movies', form)
      .subscribe(
      (response) => console.log("response " + response),
      (error) => console.log(error)
    )

  }



}
