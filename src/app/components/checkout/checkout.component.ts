import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightDetailsResponse } from 'src/app/models/flight-details-response.model';
import { ShoppingService } from 'src/app/services/shoppingservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  flightDetailsResponse: FlightDetailsResponse;

  paxcount: number;

  maxDate = new Date();

  checkoutForm: FormGroup;

  phRegx = /^[0-9]{10}/;
  cardRegx = /^[0-9]{16}/;
  nameRegx = /^[A-Z|a-z]{50}/;

  constructor(@Inject(ShoppingService) private shoppingService: ShoppingService,
    private formBuilder: FormBuilder, private router: Router) {
    this.flightDetailsResponse = shoppingService.flightDetailsResponse;
    this.paxcount = this.flightDetailsResponse.adultCount +
      this.flightDetailsResponse.childCount +
      this.flightDetailsResponse.infantCount;
  }

  ngOnInit(): void {
    this.checkoutForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.pattern(this.phRegx)]],
      persons: this.formBuilder.array([]),
      cardno: [null, [Validators.required, Validators.pattern(this.cardRegx)]],
      discountcoupon: [null],
    });
  }



  newPerson(): FormGroup {
    return this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.pattern(this.nameRegx)]],
      lastname: [null, [Validators.required, Validators.pattern(this.nameRegx)]],
      middlename: [null, Validators.pattern(this.nameRegx)],
      dateofBirth: [null, Validators.required],
      gender: [null, Validators.required],
      travelerType: [null, Validators.required]
      //add meal and seat number
    })
  }

  addPerson() {
    const pax = this.checkoutForm.controls.persons as FormArray;
    pax.push(this.formBuilder.group({
      firstname: [null, [Validators.required, Validators.pattern(this.nameRegx)]],
      // lastname: [null, [Validators.required , Validators.pattern(this.nameRegx)]],
      // middlename: [null, Validators.pattern(this.nameRegx)],
      dateofBirth: [null, Validators.required],
      // gender:[null, Validators.required],
      // travelerType:[null, Validators.required]
    }));
  }

  submit() {
    console.log(this.checkoutForm.value);
  }



}
