import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsheaderComponent } from './tripsheader.component';

describe('TripsheaderComponent', () => {
  let component: TripsheaderComponent;
  let fixture: ComponentFixture<TripsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
