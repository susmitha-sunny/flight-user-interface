import { Time } from "@angular/common";

export class Reservation {

    bookingId:  number;
        pnr:  string;
        emailId: string;
        phone: string;
        bookingStatus: string;
        departureAirport: string;
        arrivalAirport: string;
        tripType: string;
        totalFare: number;
        adultCount: number;
        childCount: number;
        infantCount: number;
        departureDate: Date;
        returnDate: Date;
        flightId: number;
        returnFlightId: number;
        flightNumber: string;
        returnFlightNumber: string;
        airlineName: string;
        returnAirlineName: string;
        iataCode: string;
        returnIataCode: string;
        departureTime: Time;
        returnDepartureTime: Time;
        arrivalTime: Time;
        returnArrivalTime: Time;
        duration: Time;
        returnDuration: Time;

    constructor(
        bookingId:  number,
        pnr:  string,
        emailId: string,
        phone: string,
        bookingStatus: string,
        departureAirport: string,
        arrivalAirport: string,
        tripType: string,
        totalFare: number,
        adultCount: number,
        childCount: number,
        infantCount: number,
        departureDate: Date,
        returnDate: Date,
        flightId: number,
        returnFlightId: number,
        flightNumber: string,
        returnFlightNumber: string,
        airlineName: string,
        returnAirlineName: string,
        iataCode: string,
        returnIataCode: string,
        departureTime: Time,
        returnDepartureTime: Time,
        arrivalTime: Time,
        returnArrivalTime: Time,
        duration: Time,
        returnDuration: Time
   ) {   }
}
