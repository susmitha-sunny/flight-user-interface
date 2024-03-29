import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  getsignin() {
    this.router.navigateByUrl('/signin')
  }

  gohome() {
    this.router.navigateByUrl('/home')
  }

  mytrips() {
    this.router.navigateByUrl('/mytrips')
  }

}
