import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeService {
  change =new Subject<any>();
  constructor() { }
}