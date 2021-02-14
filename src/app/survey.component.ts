import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";
import * as Survey from "survey-angular";
import * as widgets from "surveyjs-widgets";

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

Survey.JsonObject.metaData.addProperty("questionbase", "popupdescription:text");
Survey.JsonObject.metaData.addProperty("page", "popupdescription:text");

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
constructor(private formService:FormService){}
  ngOnInit() {
    const surveyModel = new Survey.Model(this.json);
    this.formService.Form.subscribe(res=>{
      this.json =res ;
      debugger;
      const surveey = new Survey.Model(this.json);
      Survey.SurveyNG.render("surveyElement", { model: surveey });
    })
    var x =this.json;
debugger;


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
        debugger
            if (element.type==options.question.acceptedTypes) {
              console.log(element);
            }
      });
    });
    surveyModel.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
      console.log(result.data);
    });
    Survey.SurveyNG.render("surveyElement", { model: surveyModel });
  }
}