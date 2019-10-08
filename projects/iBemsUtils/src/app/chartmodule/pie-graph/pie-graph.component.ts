import { Component, OnInit,Input } from '@angular/core';
import { AmexportComponent } from 'projects/iBemsUtils/src/app/chartmodule/amexport/amexport.component';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { ShareGraphDataService } from '../../services/share-graph-data.service';
import { PieGraph } from '../modals/pieGraph.modal';

@Component({
  selector: 'app-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.css']
})
export class PieGraphComponent implements OnInit {
  
  @Input() pieGraphData: PieGraph;
  chartTitle : any;
  chart: any;
  pieDivLine:any;
  constructor(private AmCharts: AmChartsService,private SharedGraphObj:ShareGraphDataService,
    private Amexport: AmexportComponent) { }

    isdataavaliavble :boolean =false;
  ngDoCheck(){
   
    this.SharedGraphObj.castPie.subscribe(pieGraphData => this.pieGraphData = pieGraphData);

    if(this.pieGraphData.dataProvider.length > 0  && !this.isdataavaliavble ){
      this.chartTitle = this.pieGraphData.title;
      /* this.pieDivLine = this.AmCharts.makeChart("pieDiv",   this.populateParChart()
    ); */this.populateParChart()
      this.isdataavaliavble = true;
    }
  }

  ngOnInit() {
    
  
  /*  this.pieDivLine = this.AmCharts.makeChart("pieDiv",
   this.populateParChart()
    ); */
  }
   
  
  
  populateParChart() {
   
    this.pieDivLine = this.AmCharts.makeChart('pieDiv', {
      "type": "pie",
      "theme": "Water",
      "dataProvider": this.pieGraphData.dataProvider,
     
      "numberFormatter": {
        precision: 2,
        decimalSeparator: ".",
        thousandsSeparator: ","
      },
      "guide": [{
        valueAxis: "v1",
        category: "date",
        lineAlpha: 0,
        fillColor: "#bccff7",
        fillAlpha: 0.5,
        tickLength: 0,
        expand: true
      }],
      "percentPrecision": 2,
      "responsive": [{ enabled: true }],
      "innerRadius": "60%",
      "labelRadius": 5,
      "labelTickColor": "#FFFFFF",
      "labelText": "[[percents]]%",
      "balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
      "pullOutRadius": "5%",
      "startRadius": "0%",
      "colors": ["#00b6f1", "#4dd3ff", "#007ca4", "#00edff", "#f42f7f",
        "#7a40ff", "#ffc14d", "#55e022", "#d93bff", "#ff7b88"],
      "titleField": this.pieGraphData.titleField,
      "valueField": this.pieGraphData.valueField,
      "legend": {
        "color": "#494949",
        "position": "right",
        "marginRight": 8,
        "markerLabelGap": 8,
        "useMarkerColorForLabels": false,
        "useMarkerColorForValues": true,
        "verticalGap": 2,
        "valueWidth": 90,
        "markerSize": 4
      }
      ,
            "export": {
              "enabled": true, //enable the plugin
              "menu": []  //but disable the menu
            },
    });
   this.Amexport.exportFiles(this.pieDivLine, this.pieGraphData.dataProvider, 2);
    //return this.chart;
  }

}
