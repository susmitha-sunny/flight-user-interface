import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { Flight } from 'src/app/models/common/flight.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  addFlightForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.addFlightForm = this.formBuilder.group({
      flightId: [0, [Validators.required]],
      flightNumber: ["", Validators.required],
      businessSeatCount: [0, Validators.required],
      economySeatCount: [0, Validators.required],
      meal: ["", Validators.required]
    });
  }

  doSubmit() {
    if (!this.addFlightForm.valid) {
      return;
    }
    this.addFlight()
    }

    addFlight() {
      this.adminService.addFlight(
        new Flight(this.addFlightForm.controls.flightId.value,
          this.addFlightForm.controls.flightNumber.value,
          this.addFlightForm.controls.businessSeatCount.value,
          this.addFlightForm.controls.economySeatCount.value,
          this.addFlightForm.controls.meal.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Flight added");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while adding flight', err);
          let error = new ErrorType("Unable to add flight. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }
}
