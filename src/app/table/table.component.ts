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
@Input()
get mydata(): string { return JSON.stringify(this.dataSource) }
set mydata(mydata: string) {
  this.dataSource =JSON.parse(mydata);
  this.setHiddenValue(this.dataSource);
}
// @Input() mydata:string;
@ViewChild("hidden",{read:ElementRef}) hidden:ElementRef;
  searchForm: FormGroup;
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    // debugger;
    // if (this.mydata) {
    //         this.dataSource = JSON.parse(this.mydata);
    //       }
    this.searchForm = new FormGroup({});
    this.date = new Date;
    this.headers = ['id','name','data']
  }
search(){
  this.dataSource.push({id:"addded",name:"ljlkjlj",data:"jlkljklj"})
  //this.mydata = JSON.stringify(this.dataSource);
  this.setHiddenValue(this.dataSource);
}
delete(x:any){
  var index = this.dataSource.findIndex(v=>v.id==x.id);
  this.dataSource.splice(index,1);
  this.setHiddenValue(this.dataSource);
}

setHiddenValue(data:any[]){
  debugger;
  let stringfiedTableData = JSON.stringify(data);
  this.hidden.nativeElement.value = stringfiedTableData;
  this.hidden.nativeElement.onchange(stringfiedTableData);
}
}
