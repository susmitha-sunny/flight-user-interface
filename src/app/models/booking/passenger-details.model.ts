import { Time } from "@angular/common";
import { last } from "rxjs/operators";

export class PassengerDetails {

    firstName: string;
        middleName: string;
        lastName: string;
        gender:string;
        type: string;
        dateOfBirth: Date;
        seatNumber:number;
        //returnSeatNumber:number;
        mealPreference:string;

    constructor(
        firstName: string,
        middleName: string,
        lastName: string,
        gender:string,
        type: string,
        dateOfBirth: Date,
        seatNumber:number,
        //returnSeatNumber:number,
        mealPreference:string
   ) {
       this.firstName=firstName;
       this.middleName=middleName;
       this.lastName=lastName;
       this.gender=gender;
       this.type=type;
       this.dateOfBirth=dateOfBirth;
       this.seatNumber = seatNumber;
       this.mealPreference = mealPreference;
    }
}
