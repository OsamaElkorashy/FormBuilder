import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.css']
})
export class CommonTableComponent implements OnInit {
  dataSource:any[] = [];
  headers;
  date;
  modalClosed:boolean
  isEditMode:boolean
  editedIndex:any
  formTemplate:any[]
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
    this.headers =this.formTemplate?.map(t=>t.header)
  }
  // @Input() mydata:string;
  @ViewChild("hidden",{read:ElementRef}) hidden:ElementRef;
  @ViewChild("form") dataForm:NgForm;

    constructor() { }

  ngOnInit(): void {
    this.modalClosed=true;
    this.isEditMode = false;

    this.date = new Date;
    debugger;
    this.headers =this.formTemplate?.map(t=>t.header)
  }

  delete(index){
    this.dataSource.splice(index,1);
    this.setHiddenValue(this.dataSource);
  }

  edit(rowToEdit:any,index){
    this.editedIndex = index;
    this.modalClosed = false;
    this.isEditMode = true;
    var {id,...formData} = rowToEdit;
    this.dataForm.setValue(formData);
  }

  setHiddenValue(data:any[]){
    let stringfiedTableData = JSON.stringify(data);
    this.hidden.nativeElement.value = stringfiedTableData;
    this.hidden.nativeElement.onchange(stringfiedTableData);
  }
  addRow(dataForm:NgForm){
    debugger;
    if (dataForm.disabled||dataForm.valid) {
      debugger;
      this.dataSource.push({'index':this.dataSource.length+1,...dataForm.value});
      this.ModalUtilityFunction(dataForm);
    }
  }
  editRow(dataForm:NgForm){
    if (dataForm.disabled||dataForm.valid) {
      this.dataSource[this.editedIndex] = {id:this.dataSource[this.editedIndex].id,...dataForm.value}
      this.isEditMode = false;
      this.editedIndex = null;
      this.ModalUtilityFunction(dataForm);
    }
  }
  ModalUtilityFunction(dataForm:NgForm){
    dataForm.reset();
    this.modalClosed = true;
    this.setHiddenValue(this.dataSource);
  }
}
