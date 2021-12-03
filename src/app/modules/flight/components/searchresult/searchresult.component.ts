import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ShoppingService } from 'src/app/services/shoppingservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { SearchResponse } from 'src/app/models/shopping/search-response.model';
import { FlightDetailsResponse } from 'src/app/models/shopping/flight-details-response.model';
import { FlightSchedule } from 'src/app/models/common/flight-schedule.model';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit, AfterViewInit {

  searchResponse: SearchResponse;
  flightDetailsResponse: FlightDetailsResponse;
  scheduleList: FlightSchedule[];

  @ViewChild('dataTable') dataTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<FlightSchedule>;
  columnsToDisplay = [
    'airlineName',
    'iataCode',
    'flightNumber',
    'departureAirport',
    'arrivalAirport',
    'departureTime',
    'arrivalTime',
    'duration',
    'fare',
    'select'
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(@Inject(ShoppingService) private shoppingService: ShoppingService,
    private router: Router) {
    this.searchResponse = shoppingService.searchResponse;
  }

  ngOnInit(): void {
    this.scheduleList = this.searchResponse.flightScheduleList;
    this.dataSource = new MatTableDataSource<FlightSchedule>(this.scheduleList);
    if (this.dataSource) {
      console.log(this.dataSource)
      this.dataTable.renderRows();
    }
  }

  pickItem(flightSchedule: FlightSchedule) {
    this.shoppingService.getdetails(
      flightSchedule.scheduleId,
      0,
      this.searchResponse.departureDate,
      this.searchResponse.returnDate,
      this.searchResponse.tripType,
      this.searchResponse.adultCount,
      this.searchResponse.childCount,
      this.searchResponse.infantCount
    ).subscribe({
      next: (res: any) => {
        if (res.errorMessage != null) {
          console.log(res.errorMessage)
          throwError;
        } else {
          this.flightDetailsResponse = res;
          this.shoppingService.setFlightDetailsResponse(this.flightDetailsResponse);
          this.router.navigateByUrl('/flight/checkout')
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while fetching flight details ', err);
        let error = new ErrorType("Selected flight not available. Please try again", "home", "Home")
        this.router.navigateByUrl('/notfound', { state: error });
      }
    }
    );
    //update with return id
  }
}
