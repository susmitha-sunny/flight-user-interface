import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineviewComponent } from './airlineview.component';

describe('AirlineviewComponent', () => {
  let component: AirlineviewComponent;
  let fixture: ComponentFixture<AirlineviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirlineviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlineviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
