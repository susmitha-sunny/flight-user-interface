export class Airline {

    airlineId: number;
    airlineName: string;
    iataCode: string;
    airlineStatus: string;

    constructor(
        airlineId: number,
        airlineName: string,
        iataCode: string,
        airlineStatus: string
   ) { 
       this.airlineId = airlineId;
       this.airlineName = airlineName;
       this.iataCode = iataCode;
       this.airlineStatus = airlineStatus;
    }
}

