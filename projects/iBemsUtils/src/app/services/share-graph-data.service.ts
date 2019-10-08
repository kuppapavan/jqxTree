import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BarGraph } from '../chartmodule/modals/barGraph.modal';
@Injectable({
  providedIn: 'root'
})
export class ShareGraphDataService {
  barGraphData: BarGraph = {
    title: '',
    dataProvider :  [],
    graphs : [],
    valueAxis :  [],
    exportParams :  [],
    guides :  []
  }
private graphJsonobj = new BehaviorSubject<any>(this.barGraphData);
cast = this.graphJsonobj.asObservable();

injectDynamicBarGraphObject(dynamicObject) {

   this.graphJsonobj.next(dynamicObject);

}


private pieGraphJsonobj = new BehaviorSubject<any>(this.barGraphData);
castPie = this.pieGraphJsonobj.asObservable();

injectDynamicPieGraphObject(dynamicObject) {
  alert("call")
   this.pieGraphJsonobj.next(dynamicObject);
}

 constructor() { }
  
}
