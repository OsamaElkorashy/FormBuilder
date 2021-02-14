import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijriCalenderComponent } from './hijri-calender.component';

describe('HijriCalenderComponent', () => {
  let component: HijriCalenderComponent;
  let fixture: ComponentFixture<HijriCalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijriCalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijriCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
