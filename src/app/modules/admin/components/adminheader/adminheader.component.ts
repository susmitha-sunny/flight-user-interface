import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signout() {
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    this.router.navigateByUrl('/signin')
  }

  gohome() {
    this.router.navigateByUrl('/home')
  }

}
