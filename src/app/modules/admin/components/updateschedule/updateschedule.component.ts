import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { FlightSchedule } from 'src/app/models/common/flight-schedule.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updateschedule',
  templateUrl: './updateschedule.component.html',
  styleUrls: ['./updateschedule.component.css']
})
export class UpdatescheduleComponent implements OnInit {

  updateScheduleForm: FormGroup;
  item:FlightSchedule;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.item=history.state;
    this.updateScheduleForm = this.formBuilder.group({
      scheduleId: [this.item.scheduleId],
      departureAirport: [this.item.departureAirport],
      arrivalAirport: [this.item.arrivalAirport],
      departureTime: [this.item.departureTime],
      arrivalTime: [this.item.arrivalTime],
      duration: [this.item.duration],
      fare: [this.item.fare],
      days: [this.item.days],
    });
  }

  doSubmit() {
    if (!this.updateScheduleForm.valid) {
      return;
    }
    this.updateSchedule()
    }

    updateSchedule() {
      this.adminService.updateSchedule(
        new FlightSchedule(this.updateScheduleForm.controls.scheduleId.value,
          this.updateScheduleForm.controls.departureAirport.value,
          this.updateScheduleForm.controls.arrivalAirport.value,
          this.updateScheduleForm.controls.departureTime.value,
          this.updateScheduleForm.controls.arrivalTime.value,
          this.updateScheduleForm.controls.duration.value,
          this.updateScheduleForm.controls.fare.value,
          this.updateScheduleForm.controls.days.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Schedule updated");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while updating schedule', err);
          let error = new ErrorType("Unable to update schedule. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }
}
