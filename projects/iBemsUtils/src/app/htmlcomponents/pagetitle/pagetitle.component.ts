import { Component, OnInit, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent implements OnInit {

   @Input() title: string;
   @Input() dateRange: string;
   @Input() activePeriod: string;
   @Input() displayDateRangeOptions: boolean;
   @Input() dateRangeTab: string;
  @Input() pickerOptions: any;
  @Input() chosenDate: any;
  @Output() selectedEmitter = new EventEmitter();
  pickerData: any;
  constructor() { }

  ngOnInit() {
  }
  selectedDateCallBackEmitter(value: any, dateInput: any) {
    this.pickerData = {
      start: value.start,
      end: value.end,
      selectedRange: value.selectedRange
    }
    this.selectedEmitter.emit(this.pickerData);
  }
}
