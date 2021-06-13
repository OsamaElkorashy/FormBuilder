import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";
import { init as initTable} from "./MyTable";
import { init as initCustomWidget } from "./customwidget";
import { init as inithijriCalender} from "./hijriCalender";
import {FormService}from "./Services/FormService"

widgets.icheck(Survey);
widgets.select2(Survey);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey);
widgets.jqueryuidatepicker(Survey);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey);
//widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
// widgets.ckeditor(Survey);
widgets.autocomplete(Survey);
widgets.bootstrapslider(Survey);
widgets.prettycheckbox(Survey);
//widgets.emotionsratings(Survey);
initCustomWidget(Survey);
inithijriCalender(Survey);
initTable(Survey)

//Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
//Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

Survey.StylesManager.applyTheme("default");

@Component({
  // tslint:disable-next-line:component-selector
  selector: "survey",
  template: `<div class="survey-container contentcontainer codecontainer">
    <div id="surveyElement"></div>
  </div>`,
})
export class SurveyComponent implements OnInit {
  @Output() submitSurvey = new EventEmitter<any>();
  @Input() json: object;
  result: any;
  surveyModel:any;
constructor(private formService:FormService){}
  ngOnInit() {
    var x ={"elements":[{"type":"mytable","name":"question1"}]};
    this.surveyModel = new Survey.Model(x);
    this.surveyModel.data = {"question1": "[{\"id\":\"1\",\"name\":\"ljlkjlj\",\"type\":\"jlkljklj\",\"side\":\"jlkljklj\",\"insideJob\":\"jlkljklj\",\"outsideJob\":\"jlkljklj\"}]"}
    this.formService.Form.subscribe(res=>{
      this.surveyModel  = new Survey.Model(res);
      this.render(this.surveyModel)
    })
    this.render(this.surveyModel);
  }
  render(surveyModel:any){
    surveyModel.onAfterRenderQuestion.add((survey, options) => {
      if (!options.question.popupdescription) {
        return;
      }
      // Add a button;
      const btn = document.createElement("button");
      btn.className = "btn btn-info btn-xs";
      btn.innerHTML = "More Info";
      btn.onclick = function () {
        // showDescription(question);
        alert(options.question.popupdescription);
      };
      const header = options.htmlElement.querySelector("h5");
      const span = document.createElement("span");
      span.innerHTML = "  ";
      header.appendChild(span);
      header.appendChild(btn);
    });

    surveyModel.onUploadFiles.add((creator,options)=>{
      options.files.forEach(element => {
            if (element.type==options.question.acceptedTypes) {
              console.log(element);
            }
      });
    });
  surveyModel.onComplete.add((result, options) => {
      debugger;
      this.submitSurvey.emit(result.data);
      this.result = result.data;
      console.log(result.data);
    });

    Survey.SurveyNG.render("surveyElement", { model: surveyModel  });
  }
}





// {
//   "locale": "ar",
//   "title": {
//    "ar": "NationalID"
//   },
//   "pages": [
//    {
//     "name": "page1",
//     "elements": [
//      {
//       "type": "text",
//       "name": "رقم الطلب",
//       "startWithNewLine": false,
//       "hideNumber": true,
//       "defaultValue": "12345",
//       "readOnly": true
//      },
//      {
//       "type": "text",
//       "name": "نوع الطلب",
//       "startWithNewLine": false,
//       "hideNumber": true,
//       "defaultValue": "طلب",
//       "readOnly": true
//      },
//      {
//       "type": "text",
//       "name": "تاريخ الطلب",
//       "startWithNewLine": false,
//       "hideNumber": true,
//       "defaultValue": "2021-05-17",
//       "readOnly": true,
//       "inputType": "date"
//      },
//      {
//       "type": "text",
//       "name": "اسم الفرد",
//       "startWithNewLine": false,
//       "hideNumber": true,
//       "defaultValue": "فرد",
//       "readOnly": true
//      },
//      {
//       "type": "text",
//       "name": "اسم الجهة التابع لها",
//       "startWithNewLine": false,
//       "hideNumber": true,
//       "defaultValue": "جهة",
//       "readOnly": true
//      },
//      {
//       "type": "panel",
//       "name": "بيانات المبادرة",
//       "elements": [
//        {
//         "type": "text",
//         "name": "اسم المبادرة",
//         "title": {
//          "ar": "اسم المبادرة"
//         },
//         "hideNumber": true,
//         "isRequired": true
//        }
//       ],
//       "title": {
//        "ar": "بيانات المبادرة"
//       }
//      },
//      {
//       "type": "paneldynamic",
//       "name": "MembersData",
//       "title": {
//        "ar": "بيانات أعضاء المبادرة"
//       },
//       "templateElements": [
//        {
//         "type": "text",
//         "name": "Number",
//         "useDisplayValuesInTitle": false,
//         "title": {
//          "ar": "مسلسل"
//         },
//         "readOnly": true
//        },
//        {
//         "type": "dropdown",
//         "name": "MemberType",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "نوع العضو"
//         },
//         "choices": [
//          {
//           "value": "1",
//           "text": {
//            "ar": "مؤسسة عمل أهلي"
//           }
//          },
//          {
//           "value": "2",
//           "text": {
//            "ar": "شخص طبيعي"
//           }
//          },
//          {
//           "value": "3",
//           "text": {
//            "ar": "شخص إعتباري"
//           }
//          }
//         ]
//        },
//        {
//         "type": "text",
//         "name": "RegestrationNumber",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "title": {
//          "ar": "رقم القيد"
//         }
//        },
//        {
//         "type": "text",
//         "name": "RegestrationDate",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "تاريخ القيد"
//         },
//         "validators": [
//          {
//           "type": "text",
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "inputType": "date",
//         "max": "2021-05-23"
//        },
//        {
//         "type": "html",
//         "name": "SearchButton",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "defaultValueExpression": "{panel.RegestrationDate} ",
//         "html": {
//          "ar": "<script>\ndebugger;\nvar x = survey.getQuestionByName(\"MembersData\").panels[0].getQuestionByName(\"RegestrationNumber\");\n //function Click(){\n // alert(\"{panel.RegestrationDate} {panel.RegestrationNumber}\")\n//}\nasync function NewClick () {\ndebugger;\n  const response = await fetch('https://restcountries.eu/rest/v2/name/{panel.RegestrationNumber}');\n  const myJson = await response.json(); \n\n//{panel.RegestrationNumber} = \"ay7aga\"\nconsole.log(myJson)\n//extract JSON from the http response\n  // do something with myJson\n}\n</script>\n</br>\n</br>\n<button onclick=\"NewClick()\">بحث</button>"
//         }
//        },
//        {
//         "type": "text",
//         "name": "MemberName",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "title": {
//          "ar": "الإسم"
//         }
//        },
//        {
//         "type": "text",
//         "name": "Type",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "النوع"
//         }
//        },
//        {
//         "type": "text",
//         "name": "RegestrationEntity",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "جهة القيد"
//         }
//        },
//        {
//         "type": "text",
//         "name": "InsideJob",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الوظيفة داخل المبادرة "
//         }
//        },
//        {
//         "type": "text",
//         "name": "OutsideJob",
//         "visibleIf": "{MembersData[0].MemberType} = 1",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الوظيفة خارج المبادرة"
//         }
//        },
//        {
//         "type": "text",
//         "name": "MemberName1",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "title": {
//          "ar": "الاسم "
//         }
//        },
//        {
//         "type": "dropdown",
//         "name": "Nationality",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الجنسية"
//         },
//         "choicesByUrl": {
//          "url": "https://restcountries.eu/rest/v2/all",
//          "valueName": "name"
//         }
//        },
//        {
//         "type": "text",
//         "name": "NationalID",
//         "visibleIf": "{MembersData[0].MemberType} <> 1 and {MembersData[0].Nationality} = 'Egypt' and {MembersData[0].MemberType} notempty",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم القومي "
//         }
//        },
//        {
//         "type": "text",
//         "name": "PassportNumber",
//         "visibleIf": "{MembersData[0].MemberType} <> 1 and {MembersData[0].Nationality} <> 'Egypt' and {MembersData[0].Nationality} notempty and {MembersData[0].MemberType} notempty",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم الجواز "
//         }
//        },
//        {
//         "type": "text",
//         "name": "Adress",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "محل الإقامة"
//         }
//        },
//        {
//         "type": "text",
//         "name": "MobileNumber",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم الموبيل"
//         },
//         "validators": [
//          {
//           "type": "numeric"
//          }
//         ],
//         "maxLength": 15
//        },
//        {
//         "type": "text",
//         "name": "MemberInsideJob",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الوظيفة داخل المبادرة"
//         },
//         "validators": [
//          {
//           "type": "numeric"
//          }
//         ],
//         "maxLength": 15
//        },
//        {
//         "type": "text",
//         "name": "MemberOutsideJob",
//         "visibleIf": "{MembersData[0].MemberType} = 2 or {MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الوظيفة خارج المبادرة"
//         },
//         "validators": [
//          {
//           "type": "numeric"
//          }
//         ],
//         "maxLength": 15
//        },
//        {
//         "type": "file",
//         "name": "LegalDocument",
//         "visibleIf": "{MembersData[0].MemberType} = 3",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "السند القانوني"
//         },
//         "maxSize": 0
//        }
//       ],
//       "panelCount": [
//        {}
//       ]
//      },
//      {
//       "type": "panel",
//       "name": "InitiationData",
//       "elements": [
//        {
//         "type": "text",
//         "name": "CommOfficerName",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "اسم مسئول التواصل"
//         },
//         "isRequired": true
//        },
//        {
//         "type": "text",
//         "name": "CommOfficerJob",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "وظيفة مسئول التواصل"
//         },
//         "isRequired": true
//        },
//        {
//         "type": "text",
//         "name": "CommOfficerNumber",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم مسئول التواصل"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "numeric",
//           "text": {
//            "ar": "must be 15 characters"
//           }
//          }
//         ],
//         "inputType": "tel",
//         "maxLength": 15
//        },
//        {
//         "type": "text",
//         "name": "InitSupervisorName",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "اسم المشرف على المبادرة"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           }
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "dropdown",
//         "name": "InitSupervisorNationality",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "جنسية المشرف على المبادرة"
//         },
//         "isRequired": true,
//         "choicesByUrl": {
//          "url": "https://restcountries.eu/rest/v2/all",
//          "valueName": "name"
//         }
//        },
//        {
//         "type": "text",
//         "name": "InitSupervisorAdress",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "مقر المشرف على المبادرة"
//         },
//         "isRequired": true
//        },
//        {
//         "type": "text",
//         "name": "InitSupervisorNationalID",
//         "visibleIf": "{InitSupervisorNationality} = 'Egypt'",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم القومي للمشرف"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex",
//           "text": {
//            "ar": "أدخل الرقم القومي كاملا \"14\" رقم"
//           },
//           "regex": "^\\d{14}$"
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "InitSupervisorPassportNum",
//         "visibleIf": "{InitSupervisorNationality} <> 'Egypt' and {InitSupervisorNationality} notempty",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "رقم الجواز  للمشرف"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex",
//           "text": {
//            "ar": "أدخل الرقم القومي كاملا \"14\" رقم"
//           },
//           "regex": "^\\d$"
//          },
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف وأرقام فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "InitAdress",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "عنوان مقر المبادرة"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "Fax",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الفاكس"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex",
//           "regex": "^\\d{15}$"
//          }
//         ],
//         "maxLength": 15
//        },
//        {
//         "type": "text",
//         "name": "Email",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "البريد الإلكتروني"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex"
//          }
//         ],
//         "inputType": "email",
//         "autoComplete": "email",
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "Website",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الموقع الإلكتروني"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "regex",
//           "text": {
//            "ar": "يجب ادخال الموقع الالكتروني بصيغة صحيحة "
//           },
//           "regex": "[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)"
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "InitGoal",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الهدف أو الغرض العام من إطلاق المبادرة/ الحملة"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "SideGoals",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "الاهداف الفرعية"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "ExecutionMechanisms",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "آليات التنفيذ"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "InitStartDate",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "بداية تنفيذ المبادرة"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "inputType": "date",
//         "max": "2021-05-24",
//         "maxLength": ""
//        },
//        {
//         "type": "text",
//         "name": "InitEndDate",
//         "startWithNewLine": false,
//         "title": {
//          "ar": "نهاية تنفيذ المبادرة"
//         },
//         "isRequired": true,
//         "validators": [
//          {
//           "type": "text",
//           "text": {
//            "ar": "عفوا هذا الحقل يقبل ادخال حروف فقط"
//           },
//           "minLength": 0,
//           "maxLength": 0,
//           "allowDigits": true
//          }
//         ],
//         "inputType": "date",
//         "maxLength": ""
//        }
//       ],
//       "title": {
//        "ar": "تفاصيل بيانات المبادرة"
//       }
//      }
//     ]
//    }
//   ],
//   "showPageTitles": false,
//   "showQuestionNumbers": "off"
//  }