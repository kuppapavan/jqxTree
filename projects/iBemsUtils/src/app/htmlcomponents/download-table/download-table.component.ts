import { Component, OnInit,Input, EventEmitter,Output, QueryList, ViewChildren } from '@angular/core';
import { HttpapiService } from 'projects/controls/src/app/services/httpapi.service';
import { HttpAPI } from 'projects/controls/src/app/services/httpapi.enum';
import { NotificationService } from 'projects/iBemsUtils/src/app/services/notification.service';
import { LoggerService } from 'projects/iBemsUtils/src/app/services/logger.service';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { HttpClient } from '@angular/common/http';
import 'projects/iBemsUtils/src/assets/jquery.fileDownload.js';
declare let jsPDF;
import * as $ from 'jquery'; 


declare const jQuery: {
  fileDownload: Function
};
@Component({
  selector: 'app-download-table',
  templateUrl: './download-table.component.html',
  styleUrls: ['./download-table.component.css']
})
export class DownloadTableComponent implements OnInit {
 /**
   * accept input object for to get table data. 
   */
  @Input() public tableData:any;

  /**
   * accept heder details. 
   */
  @Input() public tableHeaders:any;

  constructor(private apiService: HttpapiService,
    private notify: NotificationService,
    private logger: LoggerService) { }
  ngOnInit() {
  }
 
  csvuser:any;
  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: false,
    title: '',
    useKeysAsHeaders: false,
    useBom: true,
    noDownload: false
   // headers: ["Timestamp", "User name", "Point Name", "Old Value","New Value","Entity","Reason", "Type", "Remarks"],
  };

  dataTablePDFDownload(headerKey,rowdata,title,header,subtitle){
    let tabledata = {
      headerInfo: headerKey,
      tableData: rowdata,
      title: title,
      rowHeader:header,
      subtitle:subtitle
    }
  // this.apiService.postRequest( HttpAPI.CREATE_PDF_FOR_DATA_TABLE ,JSON.stringify(tabledata)).subscribe(result => {
  //  console.log(result)

  // },error => {
  //   this.logger.logSystemError(error);
  //   this.notify.showError(error);
  //       });

  $.ajax({
    type : 'POST',
    async:false,
    url : 'http://10.9.68.19:8082/iBemsServer/'+'CreatePDFForDataTable/',
    contentType:"application/json;charset:utf-8",
    dataType:'json',

   data:  JSON.stringify(tabledata),

    success : function(response) {
        const fileDownloadURL = 'http://10.9.68.19:8082/iBemsServer/'+'DownloadPDFReport/';
        jQuery.fileDownload(fileDownloadURL, {
          failMessageHtml: "There was a problem generating your report, please try again."
        });
    },
    error : function(jqXHR,error)
    {

      console.log("error:"+error);

    }
});

  }

  csvDownload(){
    this.csvOptions["headers"] = this.tableHeaders;
    new  AngularCsv(this.tableData, "Audit LOG", this.csvOptions);
  }

  
  pdfDownload(){
    let cols = Object.keys(this.tableData[0]);
    let subtitle = 'Period: ' + "Date";
 this.dataTablePDFDownload(cols, this.tableData, 'Audit Log', cols,subtitle);

  }
  
}
