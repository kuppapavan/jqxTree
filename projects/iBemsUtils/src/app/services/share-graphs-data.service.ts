import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { BarGraph } from '../chartmodule/modals/barGraph.modal';
import {BarGraphComponent } from 'projects/iBemsUtils/src/app/chartmodule/bar-graph/bar-graph.component';
@Injectable({
  providedIn: 'root'
})
export class ShareGraphsDataService {

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
   alert("awsome call try it")
   this.barGraphComponent.ngDoCheck();
}


constructor(private barGraphComponent:BarGraphComponent) { }



}
