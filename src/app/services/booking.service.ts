import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DatePipe, Time } from '@angular/common';
import * as moment from 'moment/moment';
import { catchError } from 'rxjs/operators';
import { BookResponse } from '../models/booking/book-response.model';
import { BookRequest } from '../models/booking/book-request.model';


@Injectable({
  providedIn: 'root'
})

export class BookingService {

  bookResponse: BookResponse;

  constructor(private http: HttpClient, private datePipe: DatePipe) { console.log("Inside service constructor") }

  handleError(error: HttpErrorResponse) {
    console.log("Error in Shopping Service " + error.message);
    //TODO
    return "Handle this"
  }

  setBookResponse(res: any) {
      this.bookResponse = res;
      console.log(this.bookResponse)
    }

  book(bookRequest: BookRequest): Observable<any> {

    //.set("datetime",new Date().toISOString());

    console.log("request")
    console.log(bookRequest)
    let host = "http://localhost:8000/flight-booking-service/booking";

    return this.http.post<BookResponse>(host, bookRequest);
  }

  coupon(code: string,
    totalFare: number): Observable<any> {

    let host = "http://localhost:8000/flight-booking-service/coupon";

    let params = new HttpParams()
      .set("code", code)
      .set("totalFare", totalFare);

    return this.http.get(host, { params: params });
  }

  reservedSeats(flightId: number,
    departureDate: string,
    departureTime: Time
    ): Observable<any> {

    let host = "http://localhost:8000/flight-booking-service/reservedseat";

    let params = new HttpParams()
      .set("flightId", flightId)
      .set('departureDate', departureDate)
      .set("departureTime", JSON.stringify(departureTime));

    console.log(params);
    return this.http.get(host, { params: params });
  }

}
