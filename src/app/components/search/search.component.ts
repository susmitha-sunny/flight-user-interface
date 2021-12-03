import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShoppingService } from 'src/app/services/shoppingservice.service';
import { Router } from '@angular/router';
import { SearchResponse } from 'src/app/models/shopping/search-response.model';
import { throwError } from 'rxjs';
import { ErrorType } from 'src/app/models/common/error-type.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  today = new Date();

  arrivalAirportList: string[];
  departureAirportList: string[];

  searchForm: FormGroup;

  searchResponse: SearchResponse;

  locationRegx = /^[A-Z]{3}/;
  countRegx = /^[0-9]{1}/;

  constructor(private formBuilder: FormBuilder,
    @Inject(ShoppingService) private shoppingService: ShoppingService,
    private router: Router) { }

  ngOnInit() {
    this.getAirports();
    this.searchForm = this.formBuilder.group({
      from: ["", Validators.required],
      to: ["", Validators.required],
      date: [this.today, Validators.required],
      triptype: ["", Validators.required],
      returndate: [null],
      adultcount: [1, [Validators.required, Validators.pattern(this.countRegx)]],
      childcount: [0, Validators.pattern(this.countRegx)],
      infantcount: [0, Validators.pattern(this.countRegx)],
    });
  }

  submit() {
    if (!this.searchForm.valid) {
      return;
    }
    this.getSearchResult();
  }

  getSearchResult() {
    this.shoppingService.search(
      this.searchForm.controls.from.value,
      this.searchForm.controls.to.value,
      this.searchForm.controls.date.value,
      this.searchForm.controls.returndate.value,
      this.searchForm.controls.triptype.value,
      this.searchForm.controls.adultcount.value,
      this.searchForm.controls.childcount.value,
      this.searchForm.controls.infantcount.value)
      .subscribe({
        next: (res: any) => {
          if (res.errorMessage != null) {
            console.log(res.errorMessage)
            throwError;
          } else {
            this.searchResponse = res;
            this.shoppingService.setSearchResponse(this.searchResponse);
            localStorage.setItem('role', 'guest');
            this.router.navigateByUrl('/flight/searchresult');
          }
        },
        error: (err) => {
          //handle error
          console.log('Error caught while fetching search result ', err);
          let error = new ErrorType("No flights found for given criteria", "home", "Home")
          this.router.navigateByUrl('/notfound' , { state: error });
        }
      });
  }

  getAirports() {
    this.shoppingService.airports()
      .subscribe({
        next: (res: any) => {
          this.departureAirportList = res.departureAirportList;
          this.arrivalAirportList = res.arrivalAirportList
        },
        error: (err) => {
          //handle error
          console.log('Cannot fetch airport list ', err);
        },
        complete: () => {
        }
      });
  }

}
