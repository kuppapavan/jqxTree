import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationService } from './notification.service';
import { UtilmethodsService } from './utilmethods.service';
import { LoggerService } from './logger.service';
import { DateUtilService } from './date-util.service';
import { ShareGraphDataService } from './share-graph-data.service';
import { ShareGraphsDataService } from './share-graphs-data.service';
import { ToastrModule } from 'ng6-toastr-notifications';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [
   NotificationService,
    LoggerService,
    UtilmethodsService,
    DateUtilService,
    ShareGraphDataService,
    ShareGraphsDataService
  ],
  exports: []
})
export class ServicesModule { }
