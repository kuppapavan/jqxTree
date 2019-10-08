
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ControlComponent } from './control/control.component';
import { SharemoduleModule } from 'projects/iBems/src/app/sharemodule/sharemodule.module';
import { VideoWallComponent } from './video-wall/video-wall.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HtmlcomponentsModule } from 'projects/iBemsUtils/src/app/htmlcomponents/htmlcomponents.module';
import { ServicesModule } from 'projects/iBemsUtils/src/app/services/services.module';
import { VideoWallTableComponent } from './video-wall-table/video-wall-table.component';// VideoWallTableComponent
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SortDirective} from './sortable.directive';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { NgHttpLoaderModule } from 'ng-http-loader';
// import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets/jqxtree';


@NgModule({

  imports: [
    SharemoduleModule,
    HtmlcomponentsModule,
    ServicesModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,// jqxTreeComponent,
    NgHttpLoaderModule.forRoot(),
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR
     }),
  ],
  declarations: [
    AppComponent,
    ControlComponent,
    VideoWallComponent,
    VideoWallTableComponent,
    SortDirective
  ],
  exports: [ VideoWallTableComponent ],
  bootstrap: [AppComponent,
              VideoWallTableComponent]
})
export class AppModule {
  constructor() {
    console.log('In Appmodule control');
  }
}
@NgModule({})
export class ControlAppModule{
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    };
  }
}
