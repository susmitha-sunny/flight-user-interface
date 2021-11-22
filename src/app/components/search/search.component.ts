import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchResponse } from 'src/app/models/search-response.model';
import { ShoppingService } from 'src/app/services/shoppingservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   
  minDate = new Date();

  searchForm: FormGroup;

  searchResponse: SearchResponse;

  locationRegx = /^[A-Z]{3}/;
  countRegx = /^[0-9]{1}/;

  constructor(private formBuilder: FormBuilder, 
    @Inject(ShoppingService) private shoppingService:ShoppingService,
    private router: Router) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      from: [null, [Validators.required, Validators.pattern(this.locationRegx)]],
      to: [null, [Validators.required, Validators.pattern(this.locationRegx)]],
      date: [null, Validators.required],
      triptype: [null, Validators.required],
      returndate: [null],
      adultcount: [null, [Validators.required, Validators.pattern(this.countRegx)]],
      childcount: [null, Validators.pattern(this.countRegx)],
      infantcount: [null, Validators.pattern(this.countRegx)],
    });
  }

  submit() {
    if (!this.searchForm.valid) {
      return;
    }
    console.log(this.searchForm.value);
    console.log(this.searchForm.valid);
    console.log(this.searchForm.errors);

    this.getSearchResult();
    }

  getSearchResult(){
    let childc = this.searchForm.controls.childcount.value;
    if(childc == null) {
      childc=0;
    }
    let infantc = this.searchForm.controls.infantcount.value;
    if(infantc == null) {
      infantc=0;
    }
    this.shoppingService.search(
      this.searchForm.controls.from.value,
      this.searchForm.controls.to.value, 
      this.searchForm.controls.date.value,
      this.searchForm.controls.returndate.value,
      this.searchForm.controls.triptype.value,
      this.searchForm.controls.adultcount.value,
      childc, infantc)
        .subscribe({
            next: (res:any)=>{
              if(res!=null || res.equals("")) {
              //  this.searchResponse=new SearchResponse(
              //   res.searchResponse.flightScheduleList,
              //   res.searchResponse.returnFlightScheduleList,
              //   res.searchResponse.departureAirport,
              //   res.searchResponse.arrivalAirport,
              //   res.searchResponse.departureDate,
              //   res.searchResponse.returnDate,
              //   res.searchResponse.tripType,
              //   res.searchResponse.adultCount,
              //   res.searchResponse.childCount,
              //   res.searchResponse.infantCount
              //   )
                this.searchResponse=res.searchResponse;
              this.shoppingService.setSearchResponse(this.searchResponse)
              this.router.navigateByUrl('/searchresult')
            }
            },
        });
    }

}
