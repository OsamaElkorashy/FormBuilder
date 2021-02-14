import { Component, ElementRef, EventEmitter, Injectable, OnInit, Output, ViewChild } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicUmalqura, NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';
import { ChangeService } from '../Services/ChangeService';

const WEEKDAYS = ['ن', 'ث', 'ر', 'خ', 'ج', 'س', 'ح'];
const MONTHS = ['محرم', 'صفر', 'ربيع الأول', 'ربيع الآخر', 'جمادى الأولى', 'جمادى الآخرة', 'رجب', 'شعبان', 'رمضان', 'شوال',
  'ذو القعدة', 'ذو الحجة'];

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {

  getWeekdayShortName(weekday: number) {
    return WEEKDAYS[weekday - 1];
  }

  getMonthShortName(month: number) {
    return MONTHS[month - 1];
  }

  getMonthFullName(month: number) {
    return MONTHS[month - 1];
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  selector: 'app-hijri-calender',
  templateUrl: './hijri-calender.component.html',
  styleUrls: ['./hijri-calender.component.css'],
  providers: [
    {provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura},
    {provide: NgbDatepickerI18n, useClass: IslamicI18n}
  ]
})
export class HijriCalenderComponent implements OnInit {
@ViewChild('dp',{read:ElementRef})date:ElementRef;
  model: NgbDateStruct;
  value:string;
  @Output() onChange = new EventEmitter<{}>();
  constructor(private calendar: NgbCalendar,private chaneService:ChangeService) {}
  ngOnInit(): void {
    this.selectToday();
  }
  change(event){
    this.value = JSON.stringify(event);
    this.onChange.emit(this.value);
    this.chaneService.change.next(this.value);
    console.log(event);
    debugger;
  }
  selectToday() {
    this.model = this.calendar.getToday();
  }

}
