import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { SurveyCreatorComponent } from './surveyCreator/survey.creator.component';
import { NgbModule,NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';
import { HijriCalenderComponent } from './hijri-calender/hijri-calender.component';
import { HijriCalenderDirective } from './hijri-calender-directive';
import { FormsModule } from '@angular/forms';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    HijriCalenderComponent,
    HijriCalenderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  entryComponents :  [
    HijriCalenderComponent
 ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector : Injector){
    const HijriCalender = createCustomElement(HijriCalenderComponent, {injector : this.injector});
    customElements.define('hijri-calender',HijriCalender);
  }
 }
