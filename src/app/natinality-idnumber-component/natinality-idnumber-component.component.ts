import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-natinality-idnumber-component',
  templateUrl: './natinality-idnumber-component.component.html',
  styleUrls: ['./natinality-idnumber-component.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting:  NatinalityIDnumberComponentComponent,
    multi: true
  }]
})
export class NatinalityIDnumberComponentComponent implements OnInit,ControlValueAccessor {

  myvalue:value;
  onchange: (e) => void;
  disabled:boolean;
  ontouched: () => void;
  constructor() { }
  writeValue(obj: any): void {
    debugger;
    this.myvalue =  obj;
  }
  registerOnChange(fn: any): void {
    this.onchange=fn
  }
  registerOnTouched(fn: any): void {
    this.ontouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    debugger;
    this.disabled = isDisabled;
  }

  ngOnInit(): void {
  }
  change(value:value){
    if (value.name==null||value.name==""||value.number==null) {
      value=null;
    }
    this.onchange(value)
  }
}
export class value{
  name:string;
  number:Number;
}
