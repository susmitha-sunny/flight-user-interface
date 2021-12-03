import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { Reservation } from 'src/app/models/common/reservation.model';
import { MyTrips } from 'src/app/models/postbooking/my-trips.model';
import { PostbookingService } from 'src/app/services/postbooking.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-pnr',
  templateUrl: './pnr.component.html',
  styleUrls: ['./pnr.component.css']
})
export class PnrComponent implements OnInit, AfterViewInit {

  myTrip:MyTrips;
  pnr:string;

  reservationList:Reservation[] = [];
  reservation:Reservation;
  @ViewChild('dataTable') dataTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Reservation>;
  columnsToDisplay = [
    // 'pnr',
    'emailId',
    'phone',
    'departureDate',
    'departureAirport',
    'arrivalAirport',
    'airlineName',
    'flightNumber',
    'departureTime',
    'arrivalTime',
    'duration',
    'paxcount',
    'bookingStatus', 
    'cancel' 
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(@Inject(PostbookingService) private postbookingService: PostbookingService, private router: Router) { }

  ngOnInit(): void {
    this.myTrip=history.state;
    this.pnr=this.myTrip.pnr;
    console.log("pnr is ", this.myTrip.pnr);
    this.findTripsByPNR();
  }

  findTripsByPNR() {
    this.postbookingService.findTripsByPNR(this.pnr)
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.reservation = res;
          this.reservationList = [];
          this.reservationList.push(this.reservation);
          this.dataSource = new MatTableDataSource<Reservation>(this.reservationList);
          if (this.dataSource) {
            console.log(this.dataSource)
            this.dataTable.renderRows();
          }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while fetching reseration ', err);
          let error = new ErrorType("No data found. Try again", "/mytrips", "My Trips")
          this.router.navigateByUrl('/notfound' , { state: error });
      }
    });
  }

  cancel(item:Reservation) {
    console.log("cancelled");
    this.postbookingService.cancel(item)
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.lambda();
          this.findTripsByPNR();
          this.dataSource = new MatTableDataSource<Reservation>(this.reservationList);
          if (this.dataSource) {
            console.log(this.dataSource)
            this.dataTable.renderRows();
          }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while cancelling pnr ', err);
      }
    });
  }

  getPaxCount(item:Reservation) {
    return item.adultCount + item.childCount + item.infantCount;
  }

  lambda() {
    this.postbookingService.triggerlambda()
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
        } else {
          console.log("mail sent ", res)
          }
        },
      });

  }

}
