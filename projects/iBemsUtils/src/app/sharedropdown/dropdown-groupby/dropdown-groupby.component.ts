import {Component,  OnInit,  Input,
  EventEmitter,  Output,  HostListener,  OnChanges, SimpleChanges, ViewChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-dropdown-groupby',
  templateUrl: './dropdown-groupby.component.html',
  styleUrls: ['./dropdown-groupby.component.css']
})
export class DropdownGroupbyComponent implements OnInit {
  
  @Input() public selectedItems = [];
  selectedItem = {};
    /**
   * Get the required inputs
   */
  @Input() public itemList = [];

   /**
   * configuration options
   */
  @Input() public settings = {};

  /**
   * Whether multiple selection or single selection allowed
   */
  @Input() public multiple: boolean = false;

  constructor() {
  }
  ngOnInit() {
   
    this.settings = {
      singleSelection: this.multiple,
      text: "Select Fields",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      searchPlaceholderText: 'Search Fields',
      enableSearchFilter: true,
      badgeShowLimit: 5,
      groupBy: "category"
    };
  }

  onItemSelect(item: any) {
    this.selectedItem = item;
   /*  console.log(item);
    console.log(this.selectedItems); */
  }
  OnItemDeSelect(item: any) {
    this.selectedItem = item;
 /*    console.log(item);
    console.log(this.selectedItems); */
  }
  onSelectAll(items: any) {
   // console.log(items);
  }
  onDeSelectAll(items: any) {
   // console.log(items);
  }
}
