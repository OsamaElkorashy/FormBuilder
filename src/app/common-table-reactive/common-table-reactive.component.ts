import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-common-table-reactive',
  templateUrl: './common-table-reactive.component.html',
  styleUrls: ['./common-table-reactive.component.css']
})
export class CommonTableReactiveComponent implements OnInit {

 dataSource:any[] = [];
  headers;
  //date:Date;
  modalClosed:boolean
  isEditMode:boolean
  editedIndex:any
  formTemplate:any[]
  addForm:FormGroup
  @Input()
  get mydata(): string { return JSON.stringify(this.dataSource) }
  set mydata(mydata: string) {
    debugger;
    this.dataSource =JSON.parse(mydata);
    this.setHiddenValue(this.dataSource);
  }
  @Input()
  set formTemplateInput(formTemplate: string) {
    debugger;
    this.formTemplate =JSON.parse(formTemplate);
    this.formTemplate?.forEach(element => {
      const formControl = new FormControl(null);
      element.validators.forEach(validator => {
        this.SetValidatores(formControl,validator)
      });
      this.addForm.addControl(element.fieldName,formControl)
    });
    this.headers =this.formTemplate?.map(t=>t.header)
  }
  // @Input() mydata:string;
  @ViewChild("hidden",{read:ElementRef}) hidden:ElementRef;

    constructor() { }

  ngOnInit(): void {
    this.addForm = new FormGroup({});

    this.modalClosed=true;
    this.isEditMode = false;
    //this.date = new Date;
    this.headers =this.formTemplate?.map(t=>t.header)
  }

  delete(index){
    this.dataSource.splice(index,1);
    this.setHiddenValue(this.dataSource);
  }

  edit(rowToEdit:any,index){
    debugger;
    this.editedIndex = index;
    this.modalClosed = false;
    this.isEditMode = true;
    var {id,index,...formData} = rowToEdit;
    this.addForm.setValue(formData);
  }

  setHiddenValue(data:any[]){
    let stringfiedTableData = JSON.stringify(data);
    this.hidden.nativeElement.value = stringfiedTableData;
    this.hidden.nativeElement.onchange(stringfiedTableData);
  }
  addRow(){
    debugger;
    if (this.addForm.disabled||this.addForm.valid) {
      debugger;
      this.dataSource.push({'index':this.dataSource.length+1,...this.addForm.value});
      this.ModalUtilityFunction(this.addForm);
    }
  }
  editRow(){
    if (this.addForm.disabled||this.addForm.valid) {
      this.dataSource[this.editedIndex] = {id:this.dataSource[this.editedIndex].id,...this.addForm.value}
      this.isEditMode = false;
      this.editedIndex = null;
      this.ModalUtilityFunction(this.addForm);
    }
  }

  ModalUtilityFunction(dataForm:FormGroup){
    dataForm.reset();
    this.modalClosed = true;
    this.setHiddenValue(this.dataSource);
  }
  SetValidatores(formControl: FormControl, validator: any) {
    if (!validator.value) {
      formControl.setValidators(Validators[validator.name])
    }
    switch (validator.name) {
      case "min":
        formControl.setValidators(Validators.min(validator.value))
        break;
      case "max":
        formControl.setValidators(Validators.max(validator.value))
        break;
      case "minLength":
        formControl.setValidators(Validators.minLength(validator.value))
        break;
      case "maxLength":
        formControl.setValidators(Validators.maxLength(validator.value))
        break;
      default:
        break;
    }
  }
}
