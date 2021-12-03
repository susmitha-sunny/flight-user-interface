import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PassengerDetails } from 'src/app/models/booking/passenger-details.model';
import { BookingService } from 'src/app/services/booking.service';
import { ShoppingService } from 'src/app/services/shoppingservice.service';
import { FlightDetailsResponse } from 'src/app/models/shopping/flight-details-response.model';
import { BookResponse } from 'src/app/models/booking/book-response.model';
import { FlightDetails } from 'src/app/models/booking/flight-details.model';
import { BookRequest } from 'src/app/models/booking/book-request.model';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  flightDetailsResponse: FlightDetailsResponse;

  passengerDetailsList: PassengerDetails[] = [];
  mealList: string[] = [];
  seatList: number[] = [];
  reservedSeatList: number[] = [];

  bookResponse: BookResponse;

  paxcount: number;

  paxIndex: number = 1;

  totalFare: number;
  newTotal: number;

  departureDate: Date;

  today = new Date();

  checkoutForm: FormGroup;
  items: FormArray;

  isCouponValid: boolean = false;

  phRegx = /^[0-9]{10}/;
  cardRegx = /^[0-9]{16}/;
  nameRegx = /^[A-Z|a-z]+/;

  constructor(@Inject(ShoppingService) private shoppingService: ShoppingService,
    @Inject(BookingService) private bookingService: BookingService,
    private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

    this.flightDetailsResponse = this.shoppingService.flightDetailsResponse;
    this.departureDate = new Date(this.flightDetailsResponse.departureDate);
    this.paxcount = this.flightDetailsResponse.adultCount + this.flightDetailsResponse.childCount + this.flightDetailsResponse.infantCount;
    this.totalFare = (this.flightDetailsResponse.adultCount + this.flightDetailsResponse.childCount) * this.flightDetailsResponse.flightSchedule.fare;
    this.newTotal = this.totalFare;
    this.getMealList();
    this.getSeatList();
    this.checkoutForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      phone: ["", [Validators.required, Validators.pattern(this.phRegx)]],
      items: this.formBuilder.array([this.createItem()]),
      cardno: ["", [Validators.required, Validators.pattern(this.cardRegx)]],
      discountcoupon: [""],
    });
  }

  createItem(): FormGroup {
    console.log("inside create Item", this.checkoutForm)
    return this.formBuilder.group({
      firstname: ["", [Validators.required, Validators.pattern(this.nameRegx)]],
      lastname: ["", [Validators.required, Validators.pattern(this.nameRegx)]],
      middlename: ["", Validators.pattern(this.nameRegx)],
      dateofBirth: [null, Validators.required],
      gender: ["", Validators.required],
      travelerType: ["", Validators.required],
      mealPreference: ["ANY"],
      seatNumber: [null],
    });
  }

  addItem(): void {
    this.items = this.checkoutForm.get('items') as FormArray;
    this.paxIndex++;

    this.items.push(this.createItem());
  }

  get itemFormGroups() {
    return this.checkoutForm.get('items') as FormArray;
  }

  doSubmit() {
    console.log(this.checkoutForm);
    if (!this.checkoutForm.valid) {
      return;
    }

    this.doBook();
  }

  doBook() {
    this.getPassengerList();
    console.log("passenger details list is ", this.passengerDetailsList);
    console.log("inside do book ");
    let flightDetails = new FlightDetails(
      this.flightDetailsResponse.flightSchedule.flight.flightId,
      this.flightDetailsResponse.flightSchedule.flight.flightNumber,
      this.flightDetailsResponse.flightSchedule.flight.airline.airlineName,
      this.flightDetailsResponse.flightSchedule.flight.airline.iataCode,
      this.departureDate,
      this.flightDetailsResponse.flightSchedule.departureTime,
      this.flightDetailsResponse.flightSchedule.arrivalTime,
      this.flightDetailsResponse.flightSchedule.duration
    );

    this.bookingService.book(new BookRequest(
      this.newTotal,
      this.flightDetailsResponse.flightSchedule.departureAirport,
      this.flightDetailsResponse.flightSchedule.arrivalAirport,
      this.flightDetailsResponse.tripType,
      this.flightDetailsResponse.adultCount,
      this.flightDetailsResponse.childCount,
      this.flightDetailsResponse.infantCount,
      this.checkoutForm.controls.email.value,
      this.checkoutForm.controls.phone.value,
      flightDetails,
      this.passengerDetailsList
    ))
      .subscribe({
        next: (res: any) => {
          if (res.errorMessage != null) {
            console.log(res.errorMessage)
            throwError;
          } else {
            console.log("inside subscribe of dobook")
            console.log(res)
            this.bookResponse = res;
            this.bookingService.setBookResponse(this.bookResponse);
            console.log("Booking response is", this.bookResponse);
            this.router.navigateByUrl('/flight/confirmation')
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while fetching booking details ', err);
          let error = new ErrorType("Unable to confirm booking. Please try again", "home", "Home")
          this.router.navigateByUrl('/notfound', { state: error });
        }
      });
  }

  getPassengerList() {
    for (let i = 0; i < this.paxcount; i++) {
      this.passengerDetailsList.push(this.getPassenger(this.checkoutForm.controls.items.value[i]))
    }
  }

  getPassenger(val: any) {
    console.log(val);
    return new PassengerDetails(val.firstname, val.middlename, val.lastname, val.gender, val.travelerType,
       val.dateofBirth, val.seatNumber, val.mealPreference);
  }

  checkcoupon() {
    this.bookingService.coupon(
      this.checkoutForm.controls.discountcoupon.value,
      this.totalFare)
      .subscribe({
        next: (res: any) => {
          if (res.errorMessage != null) {
            console.log(res.errorMessage);
          } else {
            console.log(res)
            this.isCouponValid = true;
            this.newTotal = res.discountedTotalFare;
          }
        },
      });
  }

  getMealList() {
    let meal = this.flightDetailsResponse.flightSchedule.flight.meal;
    this.mealList.push("ANY");
    if (meal == "VEG") {
      this.mealList.push("VEG");
    }
    if (meal == "NONVEG") {
      this.mealList.push("NONVEG");
    }
    if (meal == "BOTH") {
      this.mealList.push("VEG", "NONVEG");
    }
  }

  getSeatList() {
    let limit = this.flightDetailsResponse.flightSchedule.flight.economySeatCount;
    this.seatList = Array.from({ length: limit }, (_, i) => i + 1);
    this.bookingService.reservedSeats(
      this.flightDetailsResponse.flightSchedule.flight.flightId,
      this.flightDetailsResponse.departureDate,
      this.flightDetailsResponse.flightSchedule.departureTime)
      .subscribe({
        next: (res: any) => {
          if (res.errorMessage != null) {
            console.log(res.errorMessage);
          } else {
            this.reservedSeatList = res.seatList;
            console.log(this.reservedSeatList);
            for(let i=0; i<=this.reservedSeatList.length; i++) {
              this.seatList = this.seatList.filter(item => item !== this.reservedSeatList[i])
            }
          }
        },
      });


  }

}
