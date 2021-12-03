import { Time } from "@angular/common";

export class FlightDetails {

    flightId:number;
        flightNumber: string;
        airlineName: string;
        iataCode: string;
        departureDate:Date;
        departureTime: Time;
        arrivalTime: Time;
        duration: Time;

    constructor(
        flightId:number,
        flightNumber: string,
        airlineName: string,
        iataCode: string,
        departureDate:Date,
        departureTime: Time,
        arrivalTime: Time,
        duration: Time
   ) {
       this.flightId=flightId;
       this.flightNumber=flightNumber;
       this.airlineName=airlineName;
       this.iataCode=iataCode;
       this.departureDate=departureDate;
       this.departureTime=departureTime;
       this.arrivalTime=arrivalTime;
       this.duration=duration;
    }
}
