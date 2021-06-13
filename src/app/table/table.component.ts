// import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output, ViewChild } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {
// dataSource:any[] = [];
// headers;
// date;
// @Input() mydata:string;
// @ViewChild("hidden",{read:ElementRef}) hidden:ElementRef;
//  searchForm: FormGroup;
//   constructor(private changeDetector: ChangeDetectorRef) { }

//   ngOnInit(): void {
//     debugger;
//     if (this.mydata) {
//       this.dataSource = JSON.parse(this.mydata);
//     }
//     this.searchForm = new FormGroup({});
//      this.date = new Date;
//   this.headers = ['id','name','data']
//   }
// search(){
//   this.dataSource.push({id:"addded",name:"ljlkjlj",data:"jlkljklj"})
//   debugger;
//   let stringfiedTableData = JSON.stringify(this.dataSource);
//   this.hidden.nativeElement.value = stringfiedTableData;
//   this.hidden.nativeElement.onchange(stringfiedTableData);
// }
// delete(x){
// var index = this.dataSource.findIndex(v=>v.id==x.id);
// this.dataSource.splice(index,1);
// let stringfiedTableData = JSON.stringify(this.dataSource);
// this.hidden.nativeElement.value = stringfiedTableData;
// this.hidden.nativeElement.onchange(stringfiedTableData);
// }
// }


import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, NgModule, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
dataSource:any[] = [];
headers;
date;
modalClosed:boolean
isEditMode:boolean
editedIndex:any
@Input()
get mydata(): string { return JSON.stringify(this.dataSource) }
set mydata(mydata: string) {
  if (mydata&&mydata!="") {
    this.dataSource =JSON.parse(mydata);
    this.setHiddenValue(this.dataSource);
  }
}

// @Input() mydata:string;
@ViewChild("hidden",{read:ElementRef}) hidden:ElementRef;
  searchForm: FormGroup;
  dataForm: FormGroup;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.modalClosed=true;
    this.isEditMode = false;

    this.searchForm = new FormGroup({
    'regestrationNumber':new FormControl(null, Validators.required),
    'regestrationDate':new FormControl(null, Validators.required)});

    this.dataForm = new FormGroup({
      'name':new FormControl(null, Validators.required),
      'type':new FormControl(null, Validators.required),
      'side':new FormControl(null, Validators.required),
      'insideJob':new FormControl(null, Validators.required),
      'outsideJob':new FormControl(null)
    });
    this.date = new Date;
    this.headers = ['name','type','side','insideJob','outsideJob']
  }
search(){
  if (this.searchForm.valid) {
    this.dataForm.setValue({name:"Osama",type:"type",side:"side",insideJob:"insideJob",outsideJob:"outsideJob"});
    this.dataForm.disable();
  }
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
addRow(){
  if (this.dataForm.disabled||this.dataForm.valid) {
    debugger;
    this.dataSource.push({'index':this.dataSource.length+1,...this.dataForm.value});
    this.ModalUtilityFunction();
  }
}
editRow(){
  if (this.dataForm.disabled||this.dataForm.valid) {
    this.dataSource[this.editedIndex] = {id:this.dataSource[this.editedIndex].id,...this.dataForm.value}
    this.isEditMode = false;
    this.editedIndex = null;
    this.ModalUtilityFunction();
  }
}
ModalUtilityFunction(){
  this.dataForm.reset();
  this.searchForm.reset();
  this.modalClosed = true;
  this.dataForm.enable();
  this.setHiddenValue(this.dataSource);
}
}