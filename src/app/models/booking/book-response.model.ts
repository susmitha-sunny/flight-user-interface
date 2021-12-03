import { Passenger } from "../common/passenger.model";
import { Reservation } from "../common/reservation.model";

export class BookResponse {
    reservation:Reservation;
    passengers:Passenger[];

    constructor(
        reservation:Reservation,
        passengers:Passenger[]
    ) {}
}
