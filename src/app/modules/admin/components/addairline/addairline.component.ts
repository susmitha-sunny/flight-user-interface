import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Airline } from 'src/app/models/common/airline.model';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-addairline',
  templateUrl: './addairline.component.html',
  styleUrls: ['./addairline.component.css']
})
export class AddairlineComponent implements OnInit {

  addAirlineForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.addAirlineForm = this.formBuilder.group({
      airlineId: [0, [Validators.required]],
      airlineName: ["", Validators.required],
      iataCode: ["", Validators.required],
      airlineStatus: ["", Validators.required],
    });
  }

  doSubmit() {
    if (!this.addAirlineForm.valid) {
      return;
    }
    this.addAirline()
    }

    addAirline() {
      this.adminService.addAirline(
        new Airline(this.addAirlineForm.controls.airlineId.value,
          this.addAirlineForm.controls.airlineName.value,
          this.addAirlineForm.controls.iataCode.value,
          this.addAirlineForm.controls.airlineStatus.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Airline added");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while adding airline', err);
          let error = new ErrorType("Unable to add airline. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }

}
