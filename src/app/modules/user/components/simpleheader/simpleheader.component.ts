import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simpleheader',
  templateUrl: './simpleheader.component.html',
  styleUrls: ['./simpleheader.component.css']
})
export class SimpleheaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gohome() {
    this.router.navigateByUrl('/home')
  }

}
