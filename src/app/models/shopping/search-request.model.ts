export class SearchRequest {

    constructor(
         departureAirport: string,
         arrivalAirport: string,
         departureDate: Date,
         returnDate: Date,
         tripType: string,
         adultCount: number,
         childCount: number = 0,
         infantCount: number = 0,
    ) {  }
    

}
