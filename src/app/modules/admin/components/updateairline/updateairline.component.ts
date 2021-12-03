import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { Airline } from 'src/app/models/common/airline.model';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-updateairline',
  templateUrl: './updateairline.component.html',
  styleUrls: ['./updateairline.component.css']
})
export class UpdateairlineComponent implements OnInit {

  updateAirlineForm: FormGroup;
  item:Airline;

  constructor( private formBuilder: FormBuilder,
    private router: Router, @Inject(AdminService) private adminService: AdminService,) { }

  ngOnInit(): void {
    this.item=history.state;
    this.updateAirlineForm = this.formBuilder.group({
      airlineId: [this.item.airlineId],
      airlineName: [this.item.airlineName],
      iataCode: [this.item.iataCode],
      airlineStatus: [this.item.airlineStatus],
    });
  }

  doSubmit() {
    if (!this.updateAirlineForm.valid) {
      return;
    }
    this.updateAirline()
    }

    updateAirline() {
      this.adminService.updateAirline(
        new Airline(this.updateAirlineForm.controls.airlineId.value,
          this.updateAirlineForm.controls.airlineName.value,
          this.updateAirlineForm.controls.iataCode.value,
          this.updateAirlineForm.controls.airlineStatus.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null) {
            console.log(res)
            throwError;
          } else {
            console.log("Airline updated");
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while updating airline', err);
          let error = new ErrorType("Unable to update airline. Try again", "/admin/admindashboard", "Dashboard")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }


}
