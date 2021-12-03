import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleheaderComponent } from './simpleheader.component';

describe('SimpleheaderComponent', () => {
  let component: SimpleheaderComponent;
  let fixture: ComponentFixture<SimpleheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
