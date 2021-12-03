import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtRequest } from '../models/admin/jwt-request.model';
import { Airline } from '../models/common/airline.model';
import { Flight } from '../models/common/flight.model';
import { FlightSchedule } from '../models/common/flight-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  airlineList:Airline[];
  flightList:Flight[];

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

  addAirline(item:Airline) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/addairline";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.post<Airline>(host, item, { headers })
  }

  addFlight(item:Flight) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/addflight";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.post<Flight>(host, item, { headers })
  }

  addSchedule(item:FlightSchedule) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/addschedule";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.post<FlightSchedule>(host, item, { headers })
  }

  updateAirline(item:Airline) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/updateairline";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.put<boolean>(host, item, { headers })
  }

  updateFlight(item:Flight) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/updateflight";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.put<boolean>(host, item, { headers })
  }

  updateSchedule(item:FlightSchedule) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/updateschedule";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.put<boolean>(host, item, { headers })
  }

  deleteAirline(item:Airline) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/deleteairline";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.delete<boolean>(host, { headers })
  }

  deleteFlight(item:Flight) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/deleteflight";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.delete<boolean>(host, { headers })
  }

  deleteSchedule(item:FlightSchedule) {
    let token = localStorage.getItem("token");
    let host = "http://localhost:8000/flight-admin-service/deleteschedule";

    const headers= new HttpHeaders().set('Authorization', token);

    return this.http.delete<boolean>(host, { headers })
  }

  setAirlineList(item:Airline[]){
    this.airlineList = item;
  }

  setFlightList(item:Flight[]){
    this.flightList = item;
  }

}
