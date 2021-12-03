import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonheader',
  templateUrl: './commonheader.component.html',
  styleUrls: ['./commonheader.component.css']
})
export class CommonheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gohome() {
    this.router.navigateByUrl('/home')
  }

}
