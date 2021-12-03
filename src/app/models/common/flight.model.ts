import { Airline } from "./airline.model";

export class Flight {

    flightId: number;
    airline: Airline;
    flightNumber: string;
    businessSeatCount: number;
    economySeatCount: number;
    meal: string;

    constructor(
        flightId: number,
        // airline: Airline,
        flightNumber: string,
        businessSeatCount: number,
        economySeatCount: number,
        meal: string
   ) {  }
}
