import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import * as moment from 'moment/moment';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { FlightSchedule } from '../models/flight-schedule.model';
import { FlightDetailsResponse } from '../models/flight-details-response.model';

@Injectable({
  providedIn: 'root'
})


export class ShoppingService {

  searchResponse:SearchResponse;
  flightDetailsResponse:FlightDetailsResponse

  constructor(private http: HttpClient, private datePipe: DatePipe) {console.log("Inside service constructor") }

  search(departureAirport: string,
    arrivalAirport: string,
    departureDate: Date,
    returnDate: Date,
    tripType: string,
    adultCount: number,
    childCount: number,
    infantCount: number): Observable<any> {

    //.set("datetime",new Date().toISOString());

    let host = "http://localhost:8083/search";

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
    
    // let httpHeaders = new HttpHeaders({ 'Accept': 'application/json' });

    return this.http.get(host, {params: params}).pipe(catchError(this.handleError));
  }

  setSearchResponse(res:any) {
   this.searchResponse = res;

   console.log(this.searchResponse)
}

  handleError(error: HttpErrorResponse){
    console.log("Error in Shopping Service " + error.message);
    //TODO
    return "Handle this"
    }

    getdetails(scheduleId: number,
      returnScheduleId: number,
      departureDate: Date,
      returnDate: Date,
      tripType: string,
      adultCount: number,
      childCount: number,
      infantCount: number): Observable<any> {
  
      //.set("datetime",new Date().toISOString());
  
      let host = "http://localhost:8083/flightdetails";
  
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
      
      // let httpHeaders = new HttpHeaders({ 'Accept': 'application/json' });
  
      return this.http.get(host, {params: params}).pipe(catchError(this.handleError));
    }

    setFlightDetailsResponse(res:any) {
      this.flightDetailsResponse = res;
   }
}
