import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorType } from 'src/app/models/common/error-type.model';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {
  error:ErrorType;

  constructor() {
    }

  ngOnInit(): void {
    this.error=history.state
    console.log("error in notfound is ", this.error.errorMessage);
    if(this.error.errorMessage === undefined) {
      this.error = new ErrorType("Page not found", "home", "Home");
    }
  }

}
