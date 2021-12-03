import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { FlightSchedule } from 'src/app/models/common/flight-schedule.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addschedule',
  templateUrl: './addschedule.component.html',
  styleUrls: ['./addschedule.component.css']
})
export class AddscheduleComponent implements OnInit {

  addScheduleForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.addScheduleForm = this.formBuilder.group({
      scheduleId: [0, [Validators.required]],
      departureAirport: ["", Validators.required],
      arrivalAirport: ["", Validators.required],
      departureTime: [null, Validators.required],
      arrivalTime: [null, Validators.required],
      duration: [null, [Validators.required]],
      fare: [0, Validators.required],
      days: ["", Validators.required],
    });
  }

  doSubmit() {
    if (!this.addScheduleForm.valid) {
      return;
    }
    this.addSchedule()
    }

    addSchedule() {
      this.adminService.addSchedule(
        new FlightSchedule(this.addScheduleForm.controls.scheduleId.value,
          this.addScheduleForm.controls.departureAirport.value,
          this.addScheduleForm.controls.arrivalAirport.value,
          this.addScheduleForm.controls.departureTime.value,
          this.addScheduleForm.controls.arrivalTime.value,
          this.addScheduleForm.controls.duration.value,
          this.addScheduleForm.controls.fare.value,
          this.addScheduleForm.controls.days.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Schedule added");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while adding schedule', err);
          let error = new ErrorType("Unable to add schedule. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }

}
