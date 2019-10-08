import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NotifierModule } from 'angular-notifier';
import { AppRoutingModule } from './app-routing.module';
import { NgxLoadingModule } from 'ngx-loading';
import { AppComponent } from './app.component';
import { HtmlcomponentsModule } from './htmlcomponents/htmlcomponents.module';
import { ServicesModule } from './services/services.module';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { SharemoduleModule } from 'projects/iBems/src/app/sharemodule/sharemodule.module';
import { SharedropdownModule } from './sharedropdown/sharedropdown.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgMultiSelectDropDownModule,
    NotifierModule,
    BrowserAnimationsModule,
    NgHttpLoaderModule,
    SharemoduleModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR
     }),
    AppRoutingModule
  ],
  exports: [SharedropdownModule,
    HtmlcomponentsModule,
    ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

