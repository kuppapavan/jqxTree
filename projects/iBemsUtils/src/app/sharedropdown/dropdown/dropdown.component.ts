import { Component,  OnInit,  Input,} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  /**
   * accept input object for to be display default selected dropdown items. 
   */
  @Input() public selectedItems = [];

  /**
   * accept input object for to be display dropdown values. 
   */
  @Input() public dropdownList = [];

    /**
   * configuration options
   */
  @Input() public dropdownSettings = {};

  /**
   * Whether multiple selection or single selection allowed
   */
  @Input() public multiple: boolean = false;

  /**
   * Json object key text .
   */
  @Input() public item_id :string ;

  /**
   * Json object key text .
   */
  @Input() public item_text : string ;

    /**
   * optional :: Whether do you need search or not
   */
  @Input() public searchFilter = true ;
  @Input() public showLimit = 3;
  constructor() { }

  ngOnInit() {   
    this.dropdownSettings = {
      singleSelection: this.multiple,
      idField:  this.item_id,//'id',
      textField: this.item_text,//'itemName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: this.showLimit,
      allowSearchFilter: this.searchFilter
    };       
 
  }


 /* multi select dropdown event capturing */
 onItemDeSelect1(items:any){
 // console.log(items);
 // console.log("selectedItem's "+ JSON.stringify(this.selectedItems));
}
onUnSelectAll(items:any){
  //console.log(items);
 }
  onItemSelect(item: any) {
   // console.log("selected item " +JSON.stringify(item));
  // console.log("selectedItem's "+ JSON.stringify(this.selectedItems));
  }
  onSelectAll(items: any) {
   // console.log(items);
   // console.log("selectedItem's "+ JSON.stringify(this.selectedItems));
  }
  }
