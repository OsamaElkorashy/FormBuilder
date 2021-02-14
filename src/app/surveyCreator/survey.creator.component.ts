import { Component, Input, Output, EventEmitter, ComponentFactoryResolver, OnInit, ViewChild, ChangeDetectorRef, ElementRef, ViewContainerRef, ApplicationRef } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as widgets from "surveyjs-widgets";
import { init as initCustomWidget } from "../customwidget";
import { init as inithijriCalender} from "../hijriCalender";
import { Survey, surveyStrings } from "survey-angular";
import {FormService}from "../Services/FormService"
import {ChangeService}from "../Services/ChangeService"

widgets.icheck(SurveyKo);
widgets.select2(SurveyKo);
widgets.inputmask(SurveyKo);
widgets.jquerybarrating(SurveyKo);
widgets.jqueryuidatepicker(SurveyKo);
widgets.nouislider(SurveyKo);
widgets.select2tagbox(SurveyKo);
//widgets.signaturepad(SurveyKo);
widgets.sortablejs(SurveyKo);
// widgets.ckeditor(SurveyKo);
widgets.autocomplete(SurveyKo);
widgets.bootstrapslider(SurveyKo);
//widgets.emotionsratings(SurveyKo);
initCustomWidget(SurveyKo);
inithijriCalender(SurveyKo);


SurveyCreator.StylesManager.applyTheme("default");

@Component({
  selector: "survey-creator",
  templateUrl: "./survey.creator.component.html"
})
export class SurveyCreatorComponent implements OnInit{

  constructor(private formService:FormService, private changeService:ChangeService){}

  surveyCreator: SurveyCreator.SurveyCreator;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {




    surveyStrings.loadingSurvey;
    let options = { showEmbededSurveyTab: true, generateValidJSON: true,
      questionTypes: []};

    this.surveyCreator = new SurveyCreator.SurveyCreator(
      "",
      options
    );
    var x = SurveyKo.Serializer.getAllClasses();
    debugger;
    var inputTab = {
      name: "ay7aga", //the unique tab name
      title: "Inputs", //the tab title,
      template: "custom-inputs-tab",
      action: ()=>{
        inputTab.data.body  = this.ay7aga(this.surveyCreator);
        var currentCreatorText = this.surveyCreator.text;
        this.surveyCreator.render("surveyCreatorContainer");
        this.surveyCreator.text =  currentCreatorText;
        this.surveyCreator.makeNewViewActive("ay7aga");
      },
      data: {
          title: "Survey templates list",
          body:this.surveyCreator.text
      }
  }
    this.surveyCreator
    .tabs()
    .unshift(inputTab);


    this.surveyCreator.render("surveyCreatorContainer");
    this.surveyCreator.text = JSON.stringify(this.json);
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
  }
  saveMySurvey = () => {
    debugger;
    this.formService.Form.next(this.surveyCreator.text);
    this.surveySaved.emit(JSON.parse(this.surveyCreator.text));
  };
  ay7aga(surveyCreator: SurveyCreator.SurveyCreator):string{
    var result = {elements:[]};
    var x = JSON.parse(surveyCreator.text);
    if (x.pages) {
      x.pages.forEach(page => {
        if (page.elements) {
          page.elements.forEach(elem => {
            result.elements.push(elem);
          });
        }
      });
    }


   var stringfiedResult  = JSON.stringify(result);
    return stringfiedResult;
  }

}


