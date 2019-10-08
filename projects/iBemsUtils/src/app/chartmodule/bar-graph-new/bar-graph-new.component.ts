
import { AmexportComponent } from 'projects/iBemsUtils/src/app/chartmodule/amexport/amexport.component';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { BarGraph } from '../modals/barGraph.modal';
import { ShareGraphDataService } from '../../services/share-graph-data.service';


import { Component,EventEmitter, Output,OnInit,OnChanges, Input,DoCheck, ViewChild, ViewChildren, ElementRef, forwardRef, HostListener, QueryList } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit,DoCheck,OnChanges {
  
  @Input()  barGraphData : BarGraph;
  
  @Output() clickEvent = new EventEmitter();
  public chartTitle  : string = '';
   public guides: any = [];
   defaultObj : any;
   
   constructor(private AmCharts: AmChartsService, public exportChart : AmexportComponent
    ,private sharedGraphData : ShareGraphDataService) {
     // this.sharedGraphData.cast.subscribe(barGraphData => this.barGraphData = barGraphData);
  
  }
 
  @HostListener('document:click', ['$event'])
  onClick(ev: MouseEvent) {
   alert(JSON.stringify(' ..... '+this.barGraphData))
   this.populateBarChart();
  }

  ngOnChanges(barGraphData : BarGraph){
    
    this.populateBarChart();
  }
 /*  ngAfterContentInit(){
    this.populateBarChart();
 alert('ngAfterContentInit ........')
  }
  ngAfterContentChecked(){
    this.populateBarChart();
   alert('ngAfterContentChecked ........')
  }
  ngAfterViewInit(){
    this.populateBarChart();
    alert('ngAfterViewInit ........')
  }
  ngAfterViewChecked(){
    this.populateBarChart();
   alert('ngAfterViewChecked ........')
  } */
  chart: any;
  waterVsOccChart: any;
  globalChart = {
    pathToImages: 'assets/images/',
    backgroundImage: '',
    pieLegend: { color: '#494949', position: 'left', autoMargins: true, markerLabelGap: 20,
                 useMarkerColorForLabels: false, useMarkerColorForValues: true },
    pieWLegend: { position: 'left', autoMargins: true, markerLabelGap: 10, verticalGap: 18, valueWidth: 100,
                   useMarkerColorForLabels: false, useMarkerColorForValues: true, markerType: 'circle' },
    responsive: { enabled: true },
    pielabelsEnabled: false,
    pieFontSize: '100%',
    fontFamily: 'Clear Sans',
    fontcolor: '#bfbfbf',
    wpiecolors: ['#00b6f1', '#4dd3ff', '#007ca4', '#00edff'],
    waterconsmcolr: ['#00edff', '#FFFF30'],
    pieradius: '42%',
    innerradius: '60%',
    piebackgroundAlpha: 1,
    piebackgroundColor: '#fff',
    piepullOutRadius: 5,
    saveIcon: 'assets/images/download.svg',
    depth3D: 0,
    angle: 0,
    numberFormatter: { precision: 2, decimalSeparator: '.', thousandsSeparator: ',' },
    startDuration: 1,
    rotate: false,
    // Category-Axis
    categoryAxisgridAlpha: 0,
    categoryAxisaxisColor: '#fff',
    categoryAxisdashLength: 3,
    // Value-Axis
    valueAxisaxisAlpha: 1,
    valueAxisposition: ['left', 'right'],
    valueAxisminorGridEnabled: false,
    valueAxisminorGridAlpha: 0.08,
    valueAxisgridAlpha: 0.3,
    valueAxisdashLength: 4,
    valueAxis1axisColor: '#3bed1b',
    valueAxis2axisColor: '#f4c70b',
    'valueAxis1.baseValue': 0,
    'valueAxis2.gridAlpha': 0,
    'valueAxis1.axisThickness': 2,
    'valueAxis1.stackType': 'regular',
    // Graph1
    graph1lineAlpha: 0,
    graph1fillAlphas: 1,
    graph1lineColor: ['#1E9AF7', '#FFFF30', '#00ECFF'],
    graph1type: 'column',
    graph1fillColors: '#026838',
    // Graph2
    graph2type: 'line',
    graph2lineColor1: '#3bed1b',
    graph2bulletColor1: '#185b08',
    graph2bulletBorderColor1: '#185b08',
    graph2bulletBorderThickness: 2,
    graph2lineThickness: 3,
    graph2bulletBorderAlpha: 1,
    graph2bullet: 'round',
    graph2fillAlphas: 0,
    graph2lineColor2: '#21D5F4',
    graph2bulletColor2: '#21D5F4',
    graph2bulletBorderColor2: '#21D5F4',
    graphColor: ['#00bef1', '#ffcf03', '#f7b523', '#4bd32a'],
    // legend
    legenduseGraphSettings: true,
    legendfontSize: 14,
    legendfontFamily: 'Clear Sans',
    legendcolor: '#494949',
    legendverticalGap: 1,
    legendcolor1: '#2D547B',
    // chart
    chartcreditsPosition: 'top-right',
    chartbackgroundAlpha: 1,
    chartbackgroundColor: '#ffffff',
    chartfontSize: 10,
    'chart.startDuration': 1,
    'chart.rotate': false,
    'chart.depth3D': 10,
    'chart.angle': 25,
    'chart.fontSize': 14,
    'mchart.fontSize': 10,
    // axis
    axisRadius: '100%',
    axisAxisAlpha: 0,
    axisTtickColor: '#94dca0',
    axisGridInside: false,
    axisInside: false,
    // band1
    'band1.color': '#2cdd38',
    'band1.innerRadius': 60,
    // band2a
    'band2.color': '#ffde1f',
    'band2.innerRadius': 60,
    // band3
    'band3.color': '#e54e72',
    'band3.innerRadius': 60,
    // Arrow
    'arrow.innerRadius': 5,
    'arrow.radius': 60,
    'arrow.nailRadius': 5,
    'arrow.startWidth': 10,
    'arrow.nailBorderAlpha': 1,
    'arrow.nailBorderThickness': 5,
    'arrow.color': '#ff2e65',
    // Cursor
    'chartCursor.cursorAlpha': 0.1,
    'chartCursor.fullWidth': true,
    // LEGEND
    'legend.marginLeft': 110,
    'legend.color': '#2D547B',
    'legend.useGraphSettings': true,
    'legend.markerLabelGap': 25,

};
  

  ngOnInit() {
   }
 
isdataavaliavble :boolean =false;
  ngDoCheck(){
   
    //this.sharedGraphData.cast.subscribe(barGraphData => this.barGraphData = barGraphData);
 
    if(this.barGraphData.dataProvider.length > 0 && !this.isdataavaliavble ){
      this.chartTitle = this.barGraphData.title;
      this.populateBarChart();
      this.isdataavaliavble = true;
    }
  }

  populateBarChart() {
    let field;
    let titleval;
 
    if (this.barGraphData.dataProvider.length > 0) {
        this.waterVsOccChart = this.AmCharts.makeChart('waterVsOcc', {
            pathToImages: 'assets/images/',
            type: 'serial',
            dataProvider: this.barGraphData.dataProvider,
            numberFormatter: {
                precision: 0,
                decimalSeparator: '.',
                thousandsSeparator: ','
            },
            percentPrecision: 0,
            responsive: this.globalChart.responsive,
            categoryField: 'Legends',
            startDuration: this.globalChart.startDuration,
            rotate: this.globalChart.rotate,
            fontSize: this.globalChart['chart.fontSize'],
            fontFamily: this.globalChart.fontFamily,
            color: this.globalChart.fontcolor,
            categoryAxis: {
                gridAlpha: 0,
                axisAlpha: 0.3,
                gridPosition: 'start',
                axisColor: '#ffffff',
                titleColor: '#969696',
                title: titleval,
                guides: this.guides
            },
            valueAxes:this.barGraphData.valueAxis,
            graphs: this.barGraphData.graphs,
           chartCursor: {
                valueBalloonsEnabled: true,
                zoomable: true,
                cursorColor: '#ce120c',
            },
            legend: [{
                useGraphSettings: true,
                verticalGap: this.globalChart.legendverticalGap,
                fontSize: this.globalChart['chart.fontSize'],
                fontFamily: this.globalChart.fontFamily,
                color: this.globalChart.legendcolor,
                markerType: 'bullet',
                valueWidth: 100
            }],
            "export": {
              "enabled": true, //enable the plugin
              "menu": []  //but disable the menu
            },
            creditsPosition: this.globalChart.chartcreditsPosition,
            backgroundAlpha: this.globalChart.chartbackgroundAlpha,
            plotAreaFillAlphas: 1,
            plotAreaFillColors: this.globalChart.chartbackgroundColor
        });
        this.waterVsOccChart.addListener('clickGraphItem', (event) => {

       this.handleBarChartClick(event);

      });
      this.exportChart.exportFiles(this.waterVsOccChart, this.barGraphData.dataProvider,4);
    } else {
        document.getElementById('waterVsOcc').innerHTML = 'No data Found';
    }
}

handleBarChartClick(event) {
 
  const type = 'Monthly';
  let selectedDate = (this.barGraphData.dataProvider[event.item.index].Date);
let json = { };
  
  if (type == 'Monthly') {
    json = { 
    'tabselected' : 'Monthly',
    'selectedDate' : selectedDate
  }
    this.clickEvent.emit(json);
        
          } else  if (type == 'Daily') {          
            this.clickEvent.emit('Hourly');

          }
}
}
