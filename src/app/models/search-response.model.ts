import { FlightSchedule } from "./flight-schedule.model";

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
   ) {  

//     this.flightScheduleList=flightScheduleList
//     this.returnFlightScheduleList=returnFlightScheduleList
//     this.departureAirport=departureAirport
//     this.arrivalAirport=arrivalAirport
//     this.departureDate=departureDate
//     this.returnDate=returnDate
//     this.tripType=tripType
//     this.adultCount=adultCount
//     this.childCount=childCount
//     this.infantCount=infantCount;
      
   }
}
