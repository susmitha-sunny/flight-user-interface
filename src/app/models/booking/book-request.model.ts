import { FlightDetails } from "./flight-details.model";
import { PassengerDetails } from "./passenger-details.model";

export class BookRequest {

    totalFare:number;
        departureAirport: string;
        arrivalAirport: string;
        tripType: string;
        adultCount: number;
        childCount: number;
        infantCount: number;
        email:string;
        phone:string;
        flightDetails:FlightDetails;
        //returnFlightDetails:FlightDetails;
        passengerDetailsList:PassengerDetails[];

    constructor(
        totalFare:number,
        departureAirport: string,
        arrivalAirport: string,
        tripType: string,
        adultCount: number,
        childCount: number,
        infantCount: number,
        email:string,
        phone:string,
        flightDetails:FlightDetails,
        //returnFlightDetails:FlightDetails,
        passengerDetailsList:PassengerDetails[]
   ) { 
    this.totalFare=totalFare;
    this.departureAirport=departureAirport;
    this.arrivalAirport=arrivalAirport;
    this.tripType=tripType;
    this.adultCount=adultCount;
    this.childCount=childCount;
    this.infantCount=infantCount;
    this.email=email;
    this.phone=phone;
    this.flightDetails=flightDetails;
    this.passengerDetailsList=passengerDetailsList;
   }
}
