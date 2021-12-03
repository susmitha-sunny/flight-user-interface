import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/models/admin/jwt-request.model';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(@Inject(AdminService) private adminService: AdminService, 
  private formBuilder: FormBuilder,
  private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.dosignin()

    }

    dosignin() {
      this.adminService.adminsignin(
        new JwtRequest(this.loginForm.controls.username.value,
          this.loginForm.controls.password.value)
      ).subscribe({
        next: (res:any)=>{
          if (res.errorMessage != null || res.jwttoken == "") {
            console.log(res)
            throwError;
          } else {
            localStorage.setItem('role', 'admin');
            localStorage.setItem('token', "GoTravelAuthBearer " + res.jwttoken);
            this.router.navigateByUrl('/admin/admindashboard');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while signing in ', err);
          let error = new ErrorType("Invalid credentials. Try again", "/signin", "Sign in")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
        }
      

}
