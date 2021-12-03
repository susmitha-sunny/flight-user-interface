import { AfterViewInit, Component, Inject, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { throwError } from 'rxjs';
import { FlightSchedule } from 'src/app/models/common/flight-schedule.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-scheduleview',
  templateUrl: './scheduleview.component.html',
  styleUrls: ['./scheduleview.component.css']
})
export class ScheduleviewComponent implements OnInit, AfterViewInit {
  scheduleList: FlightSchedule[];
  exception: string;
  @ViewChild('dataTable') dataTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<FlightSchedule>;
  columnsToDisplay = [
    'flightNumber',
    'departureAirport',
    'arrivalAirport',
    'departureTime',
    'arrivalTime',
    'duration',
    'fare',
    'days',
    'update',
    'delete'
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(@Inject(AdminService) private adminService: AdminService) { }

  ngOnInit(): void {
    this.getschedulelist();
  }

  getschedulelist() {
    this.adminService.getschedules()
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.scheduleList = res;
          this.dataSource = new MatTableDataSource<FlightSchedule>(this.scheduleList);
    if (this.dataSource) {
      console.log(this.dataSource)
      this.dataTable.renderRows();
    }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while fetching schedule list ', err);
        this.exception = "Unable to load schedule list due to " + err;
      }
    });
  }

  update(item:FlightSchedule) {
    console.log("updated");
    
  }

  delete(item:FlightSchedule) {
    console.log("deleted");
    
  }

  add(item:FlightSchedule) {
    console.log("added flight");
    
  }

}
