import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorType } from 'src/app/models/common/error-type.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(AdminService) private adminService: AdminService,
  private router: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  }

}
