import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
json:any = null;
data:string;
  constructor(){}

  ngOnInit(): void {
          this.data   = JSON.stringify([{id:"addded",name:"ljlkjlj",data:"jlkljklj"},
      {id:"addded",name:"ljlkjlj",data:"jlkljklj"},
      {id:"addded",name:"ljlkjlj",data:"jlkljklj"}])
      console.log(this.data);
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
