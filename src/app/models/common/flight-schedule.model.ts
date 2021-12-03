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

    constructor(
        scheduleId: number,
        //flight: Flight,
        departureAirport: string,
        arrivalAirport: string,
        departureTime: Time,
        arrivalTime: Time,
        duration: Time,
        fare: number,
        days: string
   ) {  }

}
