import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtRequest } from '../models/admin/jwt-request.model';
import { Airline } from '../models/common/airline.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  airlineList:Airline[];

  constructor(private http: HttpClient, private router: Router) { }

  adminsignin(request:JwtRequest) : Observable<any>{

    let host = "http://localhost:8000/flight-admin-service/authenticate";

    return this.http.post<string>(host, request);

  }

  getairlines() : Observable<any>{

    let host = "http://localhost:8000/flight-admin-service/airline";
    let token = localStorage.getItem("token");

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.get(host, {headers: headers});
  }

  getflights() : Observable<any>{

    let host = "http://localhost:8000/flight-admin-service/flight";
    let token = localStorage.getItem("token");

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.get(host, {headers: headers});
  }

  getschedules() : Observable<any>{

    let host = "http://localhost:8000/flight-admin-service/schedule";
    let token = localStorage.getItem("token");

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.get(host, {headers: headers});
  }

  block(item:Airline) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/blockairline";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.put<boolean>(host, item, { headers })
  }

  unblock(item:Airline) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/unblockairline";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.put<boolean>(host, item, { headers })
  }

  // add(item:Airline) {
  //   let token = localStorage.getItem("token");
  //   let host = "http://localhost:8000/flight-admin-service/addairline";

  //   const headers= new HttpHeaders().set('Authorization', token);

  //   return this.http.post<string>(host, item, { headers })
  // }

  // setAirlinelist(airlinelist:any){
  //   this.airlineList=airlinelist;
  // }

}
