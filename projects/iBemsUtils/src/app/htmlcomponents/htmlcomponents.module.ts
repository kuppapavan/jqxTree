import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EntitytreeComponent } from './entitytree/entitytree.component';
import { LoaderComponent } from './loader/loader.component';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets/jqxtree';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets/jqxexpander';
import{IBemsDateUtilComponent} from './i-bems-date-util/i-bems-date-util.component'
import 'bootstrap-daterangepicker';
import { DownloadTableComponent } from './download-table/download-table.component';
import{DatetimepickerComponent} from './datetimepicker/datetimepicker.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@NgModule({
  declarations: [PagetitleComponent,, EntitytreeComponent, LoaderComponent, IBemsDateUtilComponent, DownloadTableComponent,DatetimepickerComponent],
  imports: [
    CommonModule, jqxTreeComponent, jqxExpanderComponent,
    NgbModule,FormsModule,ReactiveFormsModule,AngularDateTimePickerModule
  ],
  exports: [
    PagetitleComponent,
    EntitytreeComponent,
    IBemsDateUtilComponent,
    DownloadTableComponent,
    DatetimepickerComponent
  ]
})
export class HtmlcomponentsModule { }
