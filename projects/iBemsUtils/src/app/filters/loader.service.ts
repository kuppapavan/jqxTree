import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

 public isLoading = new BehaviorSubject(false);
  showLoader = false;

  constructor() {}

  show() {
    this.showLoader = true;
  }

  hide() {
    this.showLoader = false;
  }
}
