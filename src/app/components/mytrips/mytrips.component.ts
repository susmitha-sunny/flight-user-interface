import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyTrips } from 'src/app/models/postbooking/my-trips.model';
import { PostbookingService } from 'src/app/services/postbooking.service';

@Component({
  selector: 'app-mytrips',
  templateUrl: './mytrips.component.html',
  styleUrls: ['./mytrips.component.css']
})
export class MytripsComponent implements OnInit {

  myTripsForm: FormGroup;
  mytrip:MyTrips;

  isEmail:boolean = false;
  isPNR: boolean = false;
  isError: boolean = false;

 pnrRegx = /^[A-Z]{6}/;

  constructor(
  private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.myTripsForm = this.formBuilder.group({
      email: ["", [Validators.email]],
      pnr: ["", Validators.pattern(this.pnrRegx)],
    });
  }

  useEmail() {
    this.isEmail = true;
  }

  usePNR() {
    this.isPNR = true;
  }

  doSubmit() {
    // if (!this.myTripsForm.valid) {
    //   return;
    // }
    if(this.isEmail) {
      this.findByEmail();
    }
    if(this.isPNR) {
      this.findByPNR();
    }
    else {
      this.isError = true;
      return;
    }
    }

    findByEmail() {
      localStorage.setItem('role', 'user');
      this.mytrip = new MyTrips(this.myTripsForm.controls.email.value, "")
      this.router.navigateByUrl('/user/trips' , { state: this.mytrip});
    }

    findByPNR() {
      localStorage.setItem('role', 'user');
      this.mytrip = new MyTrips("", this.myTripsForm.controls.pnr.value)
      this.router.navigateByUrl('/user/pnr' , { state: this.mytrip});

    }

}
