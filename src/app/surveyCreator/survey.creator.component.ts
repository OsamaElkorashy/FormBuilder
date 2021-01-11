import { Component, Input, Output, EventEmitter } from "@angular/core";
import * as SurveyKo from "survey-knockout";
import * as SurveyCreator from "survey-creator";
import * as widgets from "surveyjs-widgets";
import { init as initCustomWidget } from "../customwidget";
import { surveyStrings } from "survey-angular";
import { getLocaleDateFormat } from "@angular/common";
import { Subject } from "rxjs";

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

SurveyCreator.StylesManager.applyTheme("modern");

@Component({
  selector: "survey-creator",
  templateUrl: "./survey.creator.component.html"
})
export class SurveyCreatorComponent {
  surveyCreator: SurveyCreator.SurveyCreator;
  @Input() json: any;
  @Output() surveySaved: EventEmitter<Object> = new EventEmitter();
  ngOnInit() {
    SurveyKo.JsonObject.metaData.addProperty(
      "questionbase",
      "popupdescription:text"
    );
    SurveyKo.JsonObject.metaData.addProperty("page", "popupdescription:text");
    surveyStrings.loadingSurvey;
    let options = { showEmbededSurveyTab: true, generateValidJSON: true,
      questionTypes: ["text"]};
    this.surveyCreator = new SurveyCreator.SurveyCreator(
      "",
      options
    );
    var x = this.surveyCreator;
    this.surveyCreator
    .tabs()
    .unshift({
        name: "ay7aga", //the unique tab name
        title: "Inputs", //the tab title,
        template: "custom-inputs-tab",
        action: () =>{
          this.surveyCreator.makeNewViewActive("ay7aga");
        },
        data: {
            title: "Survey templates list",
            body:this.surveyCreator.text
        }
    });
    this.surveyCreator.render("surveyCreatorContainer");
    this.surveyCreator.text = JSON.stringify(this.json);
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
  }
  saveMySurvey = () => {
    this.surveySaved.emit(JSON.parse(this.surveyCreator.text));
  };

}


