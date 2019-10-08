import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { DateUtilService } from 'projects/iBemsUtils/src/app/services/date-util.service';
import { DateEnum } from 'projects/iBemsUtils/src/app/enums/date-enum.enum';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HtmlcomponentsModule} from 'projects/iBemsUtils/src/app/htmlcomponents/htmlcomponents.module' 
@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.css']
})
export class DatetimepickerComponent implements OnInit {

  dateTime: any = new Date();
    settings: any;
    @Output() DateSelected = new EventEmitter<any>(true);
 //   @Input() dateTime1:  any;
  constructor( private dateUtilService: DateUtilService) {

     this.settings = {
      bigBanner: true,
      timePicker: true,
      format: 'dd-MM-yyyy',
      defaultOpen: false,
      };
     // debugger;
    this.dateTime= this.dateUtilService.currentDate('yyyy/MM/dd h:mm:s a',DateEnum.LOCAL_ENUS);
    //  console.log(this.dateTime);
      this.DateSelected.emit(this.dateTime);
   }
  ngOnInit() {
    // console.log(this.dateTime);
     this.DateSelected.emit(this.dateTime);
    // console.log(this.DateSelected);

  }

  onDateSelect($event) {
//console.log($event);
this.DateSelected.emit(this.dateTime);
console.log(this.dateTime);

//console.log(this.dateTime);


  }

}
