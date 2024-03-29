import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { throwError } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Airline } from 'src/app/models/common/airline.model';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airlineview',
  templateUrl: './airlineview.component.html',
  styleUrls: ['./airlineview.component.css']
})
export class AirlineviewComponent implements OnInit, AfterViewInit {

  airlineList: Airline[];
  exception: string;
  @ViewChild('dataTable') dataTable: MatTable<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource: MatTableDataSource<Airline>;
  columnsToDisplay = [
    'airlineId',
    'airlineName',
    'iataCode',
    'airlineStatus',
    'block',
    'unblock',
    'update',
    'delete'
  ];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(@Inject(AdminService) private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getairlinelist();
  }

  getairlinelist() {
    this.adminService.getairlines()
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.airlineList = res;
          this.adminService.setAirlineList(this.airlineList);
          this.dataSource = new MatTableDataSource<Airline>(this.airlineList);
          if (this.dataSource) {
            console.log(this.dataSource)
            this.dataTable.renderRows();
          }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while fetching airline list ', err);
        this.exception = "Unable to load airline list due to " + err;
      }
    });
  }

  block(item:Airline) {
    console.log("blocked");
    this.adminService.block(item)
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.getairlinelist();
          this.dataSource = new MatTableDataSource<Airline>(this.airlineList);
          if (this.dataSource) {
            console.log(this.dataSource)
            this.dataTable.renderRows();
          }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while blocking airline list ', err);
      }
    });
  }

  unblock(item:Airline) {
    console.log("unblocked");
    this.adminService.unblock(item)
    .subscribe({
      next: (res:any)=>{
        if (res.errorMessage != null) {
          console.log(res)
          throwError;
        } else {
          this.getairlinelist();
          this.dataSource = new MatTableDataSource<Airline>(this.airlineList);
          if (this.dataSource) {
            console.log(this.dataSource)
            this.dataTable.renderRows();
          }
        }
      },
      error: (err) => {
        //handle error
        console.log('Error caught while unblocking airline list ', err);
      }
    });

    
  }

  update(item:Airline) {
    this.router.navigateByUrl('/admin/updateairline' , { state: item});
  }

  delete(item:Airline) {
    this.adminService.deleteAirline(item)
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

  add() {
    this.router.navigateByUrl('/admin/addairline');
  }

}
