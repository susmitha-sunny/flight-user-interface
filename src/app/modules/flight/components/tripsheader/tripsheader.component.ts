import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tripsheader',
  templateUrl: './tripsheader.component.html',
  styleUrls: ['./tripsheader.component.css']
})
export class TripsheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gohome() {
    this.router.navigateByUrl('/home')
  }

}
