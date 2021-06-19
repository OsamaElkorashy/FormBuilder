import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { value } from './natinality-idnumber-component/natinality-idnumber-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
json:any = null;
data:string;
testForm:FormGroup;
formTemplateInput:any;
  constructor(){}

  ngOnInit(): void {
this.testForm = new FormGroup({
  testValue : new FormControl({value:{name:"Osama",number:5},disabled:false},Validators.required)
})

  //   this.formTemplateInput = JSON.stringify([{
  //     header:"Name",
  //     fieldId:"Name",
  //     fieldName:"Name",
  //     fieldType:"date",
  //     required:true
  //   },
  //   {
  //     header:"type",
  //     fieldId:"type",
  //     fieldName:"type",
  //     fieldType:"text",
  //     required:true
  //   },
  //   {
  //     header:"side",
  //     fieldId:"side",
  //     fieldName:"side",
  //     fieldType:"text",
  //     required:true
  //   },
  //   {
  //     header:"insideJob",
  //     fieldId:"insideJob",
  //     fieldName:"insideJob",
  //     fieldType:"text",
  //     required:true
  //   },
  //   {
  //     header:"outsideJob",
  //     fieldId:"outsideJob",
  //     fieldName:"outsideJob",
  //     fieldType:"text",
  //     required:true
  //   }
  // ]);
  }

  onsubmit(){
    console.log(this.testForm);
  }
  addItem(event){
    debugger;
    console.log(event);
  }
  // json =
  //   {
  //     "pages": [
  //      {
  //       "name": "page1",
  //       "elements": [
  //        {
  //         "type": "text",
  //         "name": "e-mail",
  //         "inputType": "email"
  //        },
  //        {
  //         "type": "text",
  //         "name": "password",
  //         "inputType": "password"
  //        },
  //        {
  //         "type": "dropdown",
  //         "name": "Country",
  //         "title": "Country",
  //         "choices": [
  //          {
  //           "value": "Egypt",
  //           "text": "Egypt"
  //          },
  //          {
  //           "value": "KSA",
  //           "text": "KSA"
  //          },
  //          {
  //           "value": "UAE",
  //           "text": "UAE"
  //          }
  //         ]
  //        },
  //        {
  //         "type": "dropdown",
  //         "name": "Egypt Cities",
  //         "visibleIf": "{Country} = 'Egypt'",
  //         "title": "City",
  //         "choices": [
  //          {
  //           "value": "Cairo",
  //           "text": "Cairo"
  //          },
  //          {
  //           "value": "Giza",
  //           "text": "Giza"
  //          },
  //          {
  //           "value": "Alex",
  //           "text": "Alex"
  //          }
  //         ]
  //        },
  //        {
  //         "type": "dropdown",
  //         "name": "Saudi Cities",
  //         "visibleIf": "{Country} = 'KSA'",
  //         "title": "City",
  //         "choices": [
  //          {
  //           "value": "Gedda",
  //           "text": "Gedda"
  //          },
  //          {
  //           "value": "Mekka",
  //           "text": "Mekka"
  //          }
  //         ]
  //        },
  //        {
  //         "type": "dropdown",
  //         "name": "UAE Cities",
  //         "visibleIf": "{Country} = 'UAE'",
  //         "title": "City",
  //         "choices": [
  //          {
  //           "value": "Dubai",
  //           "text": "Dubai"
  //          },
  //          {
  //           "value": "Abu Dhabi",
  //           "text": "Abu Dhabi"
  //          }
  //         ]
  //        },
  //        {
  //         "type": "barrating",
  //         "name": "question1",
  //         "choices": [
  //          1,
  //          2,
  //          3,
  //          4,
  //          5
  //         ]
  //        }
  //       ]
  //      }
  //     ]
  // };
  // json = {
  //   "pages": [
  //    {
  //     "name": "page1",
  //     "elements": [
  //      {
  //       "type": "file",
  //       "name": "question1",
  //       "maxSize": 0,
  //       "storeDataAsText": false,
  //       "acceptedTypes": "image/jpeg"
  //      }
  //     ]
  //    }
  //   ]
  //  };
  title = 'FormBuilder';
}
