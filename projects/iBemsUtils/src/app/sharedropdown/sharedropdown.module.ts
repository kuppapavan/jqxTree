import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DropdownComponent],
  imports: [FormsModule,
    CommonModule,NgMultiSelectDropDownModule.forRoot()
  ],
  exports:[DropdownComponent]
})
export class SharedropdownModule { }
