import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-movie',
  template: `
  <div class="container">


      <div class="row">
        <div class="col-md-8 order-md-1">
          <form class="needs-validation" novalidate="" enctype="multipart/form-data">

            <div class="mb-3">
              <label for="title">Title</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">#</span>
                </div>
                <input type="text" class="form-control" id="title" placeholder="Title" required="true">
                <div class="invalid-feedback" style="width: 100%;">Title is required
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="director">Director</label>
              <input type="text" class="form-control" id="director" placeholder="Director" required="true">
              <div class="invalid-feedback">
                Director is required.
              </div>
            </div>

            <div class="d-block my-3">
            <label for="relation">Do you like the movie?</label>
              <div class="custom-control custom-radio">
                <input id="like" name="relation" type="radio" class="custom-control-input" required="false">
                <label class="custom-control-label" for="like">Like</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="dislike" name="relation" type="radio" class="custom-control-input" required="false">
                <label class="custom-control-label" for="dislike">Dislike</label>
              </div>
            </div>


            <div class="mb-3">
              <label for="address">Poster</label>
              <input type="file" class="form-control" id="poster" placeholder="poster" required="true">
              <div class="invalid-feedback">
                Please attach a poster of movie.
              </div>
            </div>


            <hr class="mb-2">
            <button class="btn btn-primary btn-lg btn-block" type="submit">Add new movie's details</button>
          </form>
        </div>
      </div>

      <footer class="my-5 pt-5 text-muted text-center text-small">
        <p class="mb-1">© 2017-2018 Company Name</p>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Privacy</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Support</a></li>
        </ul>
      </footer>
    </div>
  `,
  styles: [
  ]
})
export class AddMovieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}