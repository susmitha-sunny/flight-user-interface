import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { Flight } from 'src/app/models/common/flight.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  updateFlightForm: FormGroup;
  item:Flight;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.item=history.state;
    this.updateFlightForm = this.formBuilder.group({
      flightId: [this.item.flightId],
      flightNumber: [this.item.flightNumber],
      businessSeatCount: [this.item.businessSeatCount],
      economySeatCount: [this.item.economySeatCount],
      meal: [this.item.meal]
    });
  }

  doSubmit() {
    if (!this.updateFlightForm.valid) {
      return;
    }
    this.updateFlight()
    }

    updateFlight() {
      this.adminService.updateFlight(
        new Flight(this.updateFlightForm.controls.flightId.value,
          this.updateFlightForm.controls.flightNumber.value,
          this.updateFlightForm.controls.businessSeatCount.value,
          this.updateFlightForm.controls.economySeatCount.value,
          this.updateFlightForm.controls.meal.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Flight updated");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while updating flight', err);
          let error = new ErrorType("Unable to update flight. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }
  }

