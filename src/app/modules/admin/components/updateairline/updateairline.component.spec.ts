import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateairlineComponent } from './updateairline.component';

describe('UpdateairlineComponent', () => {
  let component: UpdateairlineComponent;
  let fixture: ComponentFixture<UpdateairlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateairlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateairlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
