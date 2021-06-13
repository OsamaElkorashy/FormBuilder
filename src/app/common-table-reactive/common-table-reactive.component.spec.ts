import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTableReactiveComponent } from './common-table-reactive.component';

describe('CommonTableReactiveComponent', () => {
  let component: CommonTableReactiveComponent;
  let fixture: ComponentFixture<CommonTableReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonTableReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonTableReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
