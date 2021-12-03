import { FlightSchedule } from "../common/flight-schedule.model";


export class SearchResponse {


     flightScheduleList: FlightSchedule[];
     returnFlightScheduleList: FlightSchedule[];
     departureAirport: string;
     arrivalAirport: string;
     departureDate: Date;
     returnDate: Date;
     tripType: string;
     adultCount: number;
     childCount: number;
     infantCount: number;

    constructor(
        flightScheduleList:  FlightSchedule[],
        returnFlightScheduleList:  FlightSchedule[],
        departureAirport: string,
        arrivalAirport: string,
        departureDate: Date,
        returnDate: Date,
        tripType: string,
        adultCount: number,
        childCount: number = 0,
        infantCount: number = 0,
   ) {   }
}
