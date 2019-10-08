import { Component, Input, AfterViewInit } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
/*Create By  : Subbiah 
  Created on : 20-Dec-2018
  Purpose    : Go Green Gauge Chart for monitor the Campus Load and 
				Building Load
*/
@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.css']
})
export class GaugeComponent implements AfterViewInit {
  // @ViewChild GoGreenDashboardComponent
  @Input('chartId') chartId: any = [];
  @Input('jsonTxt') jsonTxt: any = {};

  /*  @Input('chartWidth') chartWidth: any = "100";*/ //Commented by Madhulika on 08/02/2019 as guage was getting truncated
  @Input('chartHeight') chartHeight: any = "400";
  /*  @Input('chartmarginleft') chartmarginleft: any = "12";*/ //Commented by Madhulika on 08/02/2019 as guage was getting truncated
  public chart: any;


  constructor(private AmCharts: AmChartsService) { }


  ngAfterViewInit() {
  }



  plotGraph(jsonObj) {
    this.jsonTxt = jsonObj;
    //Chart properties Modified by Madhulika on 08/02/2019 as guage values was getting truncated
    let chart = this.AmCharts.makeChart(this.chartId, {
      "type": "gauge",
      responsive: { "enabled": true },
      fontSize: 10,
      fontFamily: "Clear Sans",
      color: "#fff",
      faceAlpha: 0.3,
      faceBorderColor: "#000000",
      faceBorderWidth: 1,
      faceColor: "#ffffff",     
      marginBottom: 20,
      "numberFormatter": { "precision": 2, "decimalSeparator": ".", "thousandsSeparator": "," },
      "arrows": [
        {
          id: "arrow1",
          innerRadius: 3,
          radius: "65%",
          nailRadius: 7,
          startWidth: 10,
          nailBorderAlpha: 1,
          nailBorderThickness: 2,
          color: "#ffffff",
          value: this.jsonTxt.reading 
        }],
      "axes": [
        {
          labelsEnabled: true,
          axisThickness: 0,
          bandOutlineColor: "#FA3434",
          bottomText: this.jsonTxt.bottomTxt,
          bottomTextYOffset: -20,
          endAngle: 90,
          endValue: this.jsonTxt.thresholdPoints.endCampusValue,
          valueInterval: this.jsonTxt.thresholdPoints.campusInterval,
          fontSize: 14,
          gridCount: 1,
          inside: false,
          minorTickLength: 6,
          radius: "109%",
          startAngle: -90,
          tickAlpha: 0,
          topTextYOffset: -15,
          color: "#80ff00",
          "bands": [
            {
              alpha: 0.7,
              color: "#00CC00",
              endValue: this.jsonTxt.thresholdPoints.yellowCampusValue,
              id: "GaugeBand-1",
              innerRadius: "90%",
              startValue: this.jsonTxt.thresholdPoints.startCampusValue
            },
            {
              alpha: 0.7,
              color: "#ffac29",
              endValue: this.jsonTxt.thresholdPoints.redCampusValue,
              id: "GaugeBand-2",
              innerRadius: "60%",
              startValue: this.jsonTxt.thresholdPoints.yellowCampusValue
            },
            {
              color: "#E80808",
              endValue: this.jsonTxt.thresholdPoints.endCampusValue,
              id: "GaugeBand-3",
              innerRadius: "60%",
              startValue: this.jsonTxt.thresholdPoints.redCampusValue
            }
          ]
        }
      ]
    });
    return chart;
  }

}
