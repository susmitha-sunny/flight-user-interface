import { Time } from "@angular/common";
import { Flight } from "./flight.model";

export class FlightSchedule {

     scheduleId: number;
     flight: Flight;
     departureAirport: string;
     arrivalAirport: string;
     departureTime: Time;
     arrivalTime: Time;
     duration: Time;
     fare: number;
     days: string;

    // public get getScheduleId(): number {
    //     return this.scheduleId;
    // }
    // public set setScheduleId(value: number) {
    //     this.scheduleId = value;
    // }
        
    // public get getFlight(): Flight {
    //     return this.flight;
    // }
    // public set setFlight(value: Flight) {
    //     this.flight = value;
    // }
        
    // public get getDepartureAirport(): string {
    //     return this.departureAirport;
    // }
    // public set setDepartureAirport(value: string) {
    //     this.departureAirport = value;
    // }
        
    // public get getArrivalAirport(): string {
    //     return this.arrivalAirport;
    // }
    // public set setArrivalAirport(value: string) {
    //     this.arrivalAirport = value;
    // }
        
    // public get getDepartureTime(): Time {
    //     return this.departureTime;
    // }
    // public set setSepartureTime(value: Time) {
    //     this.departureTime = value;
    // }
        
    // public get getArrivalTime(): Time {
    //     return this.arrivalTime;
    // }
    // public set setArrivalTime(value: Time) {
    //     this.arrivalTime = value;
    // }
        
    // public get getDuration(): Time {
    //     return this.duration;
    // }
    // public set setDuration(value: Time) {
    //     this.duration = value;
    // }
        
    // public get getFare(): number {
    //     return this.fare;
    // }
    // public set setFare(value: number) {
    //     this.fare = value;
    // }
        
    // public get getDays(): string {
    //     return this.days;
    // }
    // public set setDays(value: string) {
    //     this.days = value;
    // }

    constructor(
        scheduleId: number,
        flight: Flight,
        departureAirport: string,
        arrivalAirport: string,
        departureTime: Time,
        arrivalTime: Time,
        duration: Time,
        fare: number,
        days: string
   ) {  }

}
