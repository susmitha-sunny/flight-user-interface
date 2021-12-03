import { FlightSchedule } from "../common/flight-schedule.model";


export class FlightDetailsResponse {

    flightSchedule:  FlightSchedule;
        returnFlightSchedule:  FlightSchedule;
        totalFare: number;
        departureDate: string;
        returnDate: string;
        tripType: string;
        adultCount: number;
        childCount: number;
        infantCount: number;

    constructor(
        flightSchedule:  FlightSchedule,
        returnFlightSchedule:  FlightSchedule,
        totalFare: number,
        departureDate: string,
        returnDate: string,
        tripType: string,
        adultCount: number,
        childCount: number = 0,
        infantCount: number = 0,
   ) { 
}
}
