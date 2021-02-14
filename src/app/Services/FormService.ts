import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  Form =new Subject<any>();
  constructor() { }
}