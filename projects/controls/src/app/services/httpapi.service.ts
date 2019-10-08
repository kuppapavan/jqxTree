import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { ShareCommonObjectsService } from 'projects/iBems/src/app/services/share-common-objects.service';

@Injectable({
  providedIn: 'root'
})
export class HttpapiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  baseURL: any="10.9.68.19:8081/iBemsServer/";
  constructor( private http: HttpClient,private fetchBaseUrl: ShareCommonObjectsService) {
//console.log('......................................');
   
    }
getbaseUrl(){
  if(this.baseURL =="" || this.baseURL == undefined){
    this.fetchBaseUrl.getRequest().subscribe( data => {
    
     this.baseURL = data;
//alert("... getbaseUrl "+JSON.stringify(this.baseURL.URL));
 //  console.log('......................................');
     
     });
  }
}
  getRequest(apiURL): Observable<any> {
    this.getbaseUrl();
    //alert( " getRequest "+this.baseURL);
   // console.log('........................NNNNNNNNNNNNNNNNNNNNNNNNN..............');
    this.baseURL='http://10.9.68.19:8082/iBemsServer/';
    apiURL = this.baseURL + apiURL;
    return this.http.get(apiURL).pipe(map(this.extractData));
  }

  private extractData(res: Response) {
//console.log('........................NNNNNNNNNNNNNNNNNNNNNNNNN..............');
  //  console.log(res);
   // console.log('......................................');
  let body = res;
  return body ;
  }




  public postRequest(url: string, jsonObj) {
    this.baseURL='http://10.9.68.19:8082/iBemsServer/';
   let postURL = this.baseURL + url;
console.log(this.baseURL);
console.log(postURL);
    return this.http.post(postURL, jsonObj, this.httpOptions);
  }
}
