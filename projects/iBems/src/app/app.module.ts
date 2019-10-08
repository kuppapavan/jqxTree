import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmexportComponent } from 'projects/iBemsUtils/src/app/chartmodule/amexport/amexport.component';
import { ControlAppModule } from 'projects/controls/src/app/app.module';
import { SharemoduleModule } from './sharemodule/sharemodule.module';;
import { AmChartsService } from '@amcharts/amcharts3-angular';
import { ShareCommonObjectsService } from './services/share-common-objects.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicAuthInterceptor } from 'projects/iBemsUtils/src/app/filters/basic-auth.interceptor';
import { ErrorInterceptor } from 'projects/iBemsUtils/src/app/filters/error.interceptor';
import {NgIdleKeepaliveModule} from '@ng-idle/keepalive';
import { ProgressBarModalComponent } from './progressbar-modal.component';
import {BarGraphComponent } from 'projects/iBemsUtils/src/app/chartmodule/bar-graph/bar-graph.component';
@NgModule({
  declarations: [
    AppComponent,
    ProgressBarModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule, NgHttpLoaderModule.forRoot(),
    NgIdleKeepaliveModule.forRoot(),
    ControlAppModule.forRoot(),
    AppRoutingModule,
  ],
  exports: [SharemoduleModule],
  providers: [AmexportComponent,
              AmChartsService,
              ShareCommonObjectsService, BarGraphComponent,
              { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [ProgressBarModalComponent]

})
export class AppModule { }
@NgModule({})
export class IBemsAppModule{
  constructor(){
    console.log('AlarmAppModuleAlarmAppModule')
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
