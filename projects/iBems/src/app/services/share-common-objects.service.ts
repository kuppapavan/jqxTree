import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import {Router, Params} from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable()
export class ShareCommonObjectsService {

  httpdata;
  private dateformat = new BehaviorSubject<string>('ddMMyyyy');
  cast = this.dateformat.asObservable();

  /* setting default Child Menu/ide menu Id as Zero */
  private childMenuId  = new BehaviorSubject<string>('0');
  castChildMenuId = this.childMenuId.asObservable();


  /* setting default Child Menu/ide menu Id as Zero */
  private baseUrl  = new BehaviorSubject<string>('');
  castbaseUrl = this.baseUrl.asObservable();

  constructor(private http: HttpClient, private router: Router) {
     this.getRequest().subscribe((data: {}) => {
      this.httpdata = data;
         return data;
        });
  }

  editDateformat(desiredFormat) {
    this.dateformat.next(desiredFormat);
   }

  setDynamBaseUrl(baseUrl) {
    this.baseUrl.next(baseUrl);
   }

  setDynamiChildMenuId(childMenuId) {
    this.childMenuId.next(childMenuId);
   }

getRequest(): Observable<any> {
   return this.http.get('assets/StaticJSON/envSetup.json').pipe(map(this.extractData));
}

private extractData(res: Response) {
   let body = res;
  return body ;
  }
}

