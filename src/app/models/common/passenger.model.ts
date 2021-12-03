export class Passenger {

    passengerId:  number;
    ticketNumber:  string;
    pnr: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    passengerType: string;
    dob: Date;
    seatNumber: number;
    returnSeatNumber: number;
    mealPreference: string;

    constructor(
        passengerId:  number,
        ticketNumber:  string,
        pnr: string,
        firstName: string,
        middleName: string,
        lastName: string,
        gender: string,
        passengerType: string,
        dob: Date,
        seatNumber: number,
        returnSeatNumber: number,
        mealPreference: string
   ) {   }
}
