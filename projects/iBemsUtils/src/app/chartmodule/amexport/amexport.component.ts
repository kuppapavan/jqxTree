import { Component, OnInit } from '@angular/core';
import { AmChartsService } from '@amcharts/amcharts3-angular';
import * as $ from 'jquery';
@Component({
  selector: 'app-amexport',
  templateUrl: './amexport.component.html',
  styleUrls: ['./amexport.component.css']
})
export class AmexportComponent implements OnInit {

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
  }

  exportFiles(chart, data, id) {


         if (id == 1) {

           $('#chart-selector .dropdown-item').on('click', function(e) {
            // alert("jquery")
             let format = $(this).data('click');
             switch (format) {

               case 'CSV':
               case 'XLSX':
               case 'JSON':
                 chart.export['to' + format]({}, function(data) {
                   this.download(data, this.defaults.formats[format].mimeType, 'line.' + format.toLowerCase());
                 });
                 break;

               case 'JPG':
               case 'PNG':
               case 'SVG':
               case 'PDF':
                 chart.export.capture({}, function() {
                   this['to' + format]({}, function(data) {
                     this.download(data, this.defaults.formats[format].mimeType, 'line.' + format.toLowerCase());
                   });
              });
                 break;

               case 'PRINT':
               default:
                 chart.export.capture({}, function() {
                   this.toPRINT();
                 });
             }
           });
         } else if (id == 2) {


  $('#chart-selector1 .dropdown-item').on('click', function(e) {
          // alert("jquery-2")

              let format = $(this).data('click');
              switch (format) {

                case 'CSV':
                case 'XLSX':
                case 'JSON':
                  chart.export['to' + format]({}, function(data) {
                    this.download(data, this.defaults.formats[format].mimeType, 'pie.' + format.toLowerCase());
                  });
                  break;

                case 'JPG':
                case 'PNG':
                case 'SVG':
                case 'PDF':
                  chart.export.capture({}, function() {
                    this['to' + format]({}, function(data) {
                      this.download(data, this.defaults.formats[format].mimeType, 'pie.' + format.toLowerCase());
                    });
                  });
                  break;

                case 'PRINT':
                default:
                  chart.export.capture({}, function() {
                    this.toPRINT();
                  });
              }
            });
         } else if (id == 4) {

          $('#chart-selector3 .dropdown-item').on('click', function(e) {
            //  alert("jquery-2")
            debugger;
            var format = $(this).data('click');
            switch (format) {

                case 'CSV':
                case 'XLSX':
                case 'JSON':
                  chart.export['to' + format]({}, function(data) {
                    this.download(data, this.defaults.formats[format].mimeType, 'bar1.' + format.toLowerCase());
                  });
                  break;

                case 'JPG':
                case 'PNG':
                case 'SVG':
                case 'PDF':
                  chart.export.capture({}, function() {
                    this['to' + format]({}, function(data) {
                      this.download(data, this.defaults.formats[format].mimeType, 'bar1.' + format.toLowerCase());
                    });
                  });
                  break;

                case 'PRINT':
                default:
                  chart.export.capture({}, function() {
                    this.toPRINT();
                  });
              }
            });
         } else {

           $('#chart-selector2 .dropdown-item').on('click', function(e) {
           //  alert("jquery-2")
             let format = $(this).data('click');
             switch (format) {

               case 'CSV':
               case 'XLSX':
               case 'JSON':
                 chart.export['to' + format]({}, function(data) {
                   this.download(data, this.defaults.formats[format].mimeType, 'guage.' + format.toLowerCase());
                 });
                 break;

               case 'JPG':
               case 'PNG':
               case 'SVG':
               case 'PDF':
                 chart.export.capture({}, function() {
                   this['to' + format]({}, function(data) {
                     this.download(data, this.defaults.formats[format].mimeType, 'guage.' + format.toLowerCase());
                   });
                 });
                 break;

               case 'PRINT':
               default:
                 chart.export.capture({}, function() {
                   this.toPRINT();
                 });
             }
           });
         }

       }
}
