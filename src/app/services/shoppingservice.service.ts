import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as moment from 'moment/moment';
import { SearchResponse } from '../models/shopping/search-response.model';
import { FlightDetailsResponse } from '../models/shopping/flight-details-response.model';

@Injectable({
  providedIn: 'root'
})


export class ShoppingService {

  searchResponse: SearchResponse;
  flightDetailsResponse: FlightDetailsResponse;

  constructor(private http: HttpClient, private datePipe: DatePipe) { console.log("Inside shopping service constructor") }

  search(departureAirport: string,
    arrivalAirport: string,
    departureDate: Date,
    returnDate: Date,
    tripType: string,
    adultCount: number,
    childCount: number,
    infantCount: number): Observable<any> {

    //.set("datetime",new Date().toISOString());

    let host = "http://localhost:8000/flight-shopping-service/search";

    let params = new HttpParams()
      .set("departureAirport", departureAirport)
      .set("arrivalAirport", arrivalAirport)
      .set("tripType", tripType);

    if (departureDate != null) {
      params = params.set('departureDate', moment(departureDate).format("YYYY-MM-DD"));
    }

    if (returnDate != null) {
      params = params.set('returnDate', moment(returnDate).format("YYYY-MM-DD"));
    }

    params = params.set("adultCount", adultCount)
      .set("childCount", childCount)
      .set("infantCount", infantCount);

    return this.http.get(host, { params: params });
  }

  setSearchResponse(res: any) {
    this.searchResponse = res;
  }

  getdetails(scheduleId: number,
    returnScheduleId: number,
    departureDate: Date,
    returnDate: Date,
    tripType: string,
    adultCount: number,
    childCount: number,
    infantCount: number): Observable<any> {

    let host = "http://localhost:8000/flight-shopping-service/flightdetails";

    let params = new HttpParams()
      .set("scheduleId", scheduleId)
      .set("returnScheduleId", returnScheduleId);

    if (departureDate != null) {
      params = params.set('departureDate', moment(departureDate).format("YYYY-MM-DD"));
    }

    if (returnDate != null) {
      params = params.set('returnDate', moment(returnDate).format("YYYY-MM-DD"));
    }

    params = params.set("tripType", tripType)
      .set("adultCount", adultCount)
      .set("childCount", childCount)
      .set("infantCount", infantCount);

    return this.http.get(host, { params: params });
  }

  setFlightDetailsResponse(res: any) {
    this.flightDetailsResponse = res;
  }

  airports(): Observable<any> {

    let host = "http://localhost:8000/flight-shopping-service/airports";

    return this.http.get(host);
  }

}
