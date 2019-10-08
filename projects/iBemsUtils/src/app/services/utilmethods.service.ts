import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilmethodsService {

  constructor() { }

  public getObjectKeys(obj) {
      return Object.keys(obj);
  }

  public getDataBasedonKey(keyName, obj) {
     return obj[keyName];
  }

  public getJSONObjectBasedOnCondition(jsonArray, key, value) {
    let responseOBJ = {};
    jsonArray.filter(item => {
      if(item[key] === value) {
        responseOBJ = item;
      }
    });
    return responseOBJ;
  }
}
