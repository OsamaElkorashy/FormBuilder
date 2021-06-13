import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './survey.component';
import { SurveyCreatorComponent } from './surveyCreator/survey.creator.component';
import { NgbModule,NgbCalendarIslamicUmalqura } from '@ng-bootstrap/ng-bootstrap';
import { HijriCalenderComponent } from './hijri-calender/hijri-calender.component';
import { HijriCalenderDirective } from './hijri-calender-directive';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import  { Injector ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import  { createCustomElement } from '@angular/elements';
import {TableComponent} from './table/table.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { CommonTableReactiveComponent } from './common-table-reactive/common-table-reactive.component'

@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyCreatorComponent,
    HijriCalenderComponent,
    HijriCalenderDirective,
    TableComponent,
    CommonTableComponent,
    CommonTableReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents :  [
    HijriCalenderComponent,
    TableComponent,
    CommonTableReactiveComponent,
    CommonTableComponent
 ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule {
  constructor(private injector : Injector){
    const HijriCalender = createCustomElement(HijriCalenderComponent, {injector : this.injector});
    customElements.define('hijri-calender',HijriCalender);

    const Table = createCustomElement(TableComponent, {injector : this.injector});
    customElements.define('my-table',Table);

    const TableReactive = createCustomElement(CommonTableReactiveComponent, {injector : this.injector});
    customElements.define('my-reactive-table',TableReactive);

    const TableCommon = createCustomElement(CommonTableComponent, {injector : this.injector});
    customElements.define('my-common-table',TableCommon);
  }
 }
