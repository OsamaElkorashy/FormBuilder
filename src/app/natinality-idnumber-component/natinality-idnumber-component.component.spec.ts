import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NatinalityIDnumberComponentComponent } from './natinality-idnumber-component.component';

describe('NatinalityIDnumberComponentComponent', () => {
  let component: NatinalityIDnumberComponentComponent;
  let fixture: ComponentFixture<NatinalityIDnumberComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NatinalityIDnumberComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NatinalityIDnumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
