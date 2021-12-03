import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Reservation } from '../models/common/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class PostbookingService {

  constructor(private http: HttpClient, private router: Router) { }

  findTripsByEmail(email:string) : Observable<any>{

    let params = new HttpParams()
    .set("email", email);

    let host = "http://localhost:8000/flight-postbooking-service/triphistory";

    return this.http.get(host, { params: params });
  }

  findTripsByPNR(pnr:string) : Observable<any>{

    let params = new HttpParams()
    .set("pnr", pnr);

    let host = "http://localhost:8000/flight-postbooking-service/retrievepnr";

    return this.http.get(host, { params: params });
  }

  cancel(item:Reservation) {

    let host = "http://localhost:8000/flight-postbooking-service/cancelreservation";

    return this.http.put<boolean>(host, item)
  }

  triggerlambda() : Observable<any>{

    console.log("inside lambda trigger ")

    let host = "https://j9dleibkue.execute-api.us-east-2.amazonaws.com/default/sendCancellationMail";

    return this.http.get(host);
  }

}
