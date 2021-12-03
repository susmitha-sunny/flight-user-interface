import { AfterViewInit, Component, Inject, OnInit, ViewChild  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Flight } from 'src/app/models/common/flight.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-flightview',
  templateUrl: './flightview.component.html',
  styleUrls: ['./flightview.component.css']
})
export class FlightviewComponent implements OnInit, AfterViewInit {

  flightList: Flight[];
  exception: string;
  @ViewChild('dataTable') dataTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Flight>;
  columnsToDisplay = [
    'flightId',
    'airlineName',
    'flightNumber',
    'businessSeatCount',
    'economySeatCount',
    'meal',
    'update',
    'delete'
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(@Inject(AdminService) private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getflightlist();
  }

  getflightlist() {
    this.adminService.getflights()
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.flightList = res;
          this.adminService.setFlightList(this.flightList);
          this.dataSource = new MatTableDataSource<Flight>(this.flightList);
    if (this.dataSource) {
      console.log(this.dataSource)
      this.dataTable.renderRows();
    }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while fetching flight list ', err);
        this.exception = "Unable to load flight list due to " + err;
      }
    });
  }

  update(item:Flight) {
    this.router.navigateByUrl('/admin/updateflight' , { state: item});
    
  }

  delete(item:Flight) {
    this.adminService.deleteFlight(item)
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          console.log("Deletion successful")
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while deleting ', err);
      }
    });
    
  }

  add(item:Flight) {
    this.router.navigateByUrl('/admin/addflight');
  }

}
