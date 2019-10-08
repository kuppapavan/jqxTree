import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { NotificationService } from 'projects/iBemsUtils/src/app/services/notification.service';
import { LoggerService } from 'projects/iBemsUtils/src/app/services/logger.service';
import { environment } from 'projects/iBems/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

   contextpath : string;
   httpdata ;
   httpOptions = {
    headers: new HttpHeaders({
                                'Content-Type':  'application/json'
                              })
                };


  constructor(private http: HttpClient,
              private notify: NotificationService,
              private logger: LoggerService) {}

  getRequest(requestURL): Observable<any> {
    return this.http.get<any>(environment.API_BASE_URL + requestURL, this.httpOptions)
              .pipe(
                      map(response => {
                                      console.log(response);
                                      return response;
                                    }
                        ),
                        catchError(
                                  err => throwError(this.logger.logSystemError(err))
                                  )
                     );



    //  return this.http.get(logInurl).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
  let body = res;
  return body ;
  }

  public postRequest (url : string, jsonObj){
   // url = this.banseUrl.URL + url;
  //  url = this.endpoint + url;
    return this.http.post(url, jsonObj, this.httpOptions);
  }
}
