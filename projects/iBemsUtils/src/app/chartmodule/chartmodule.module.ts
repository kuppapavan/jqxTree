import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { AmexportComponent } from './amexport/amexport.component';
import { PieGraphComponent } from './pie-graph/pie-graph.component';
import { GaugeComponent } from './gauge/gauge.component';



@NgModule({
  declarations: [BarGraphComponent, AmexportComponent, PieGraphComponent, GaugeComponent],
  imports: [
    CommonModule
  ],
  exports:[BarGraphComponent , AmexportComponent, PieGraphComponent, GaugeComponent]
})
export class ChartmoduleModule { }
