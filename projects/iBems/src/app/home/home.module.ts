import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { SharemoduleModule } from '../sharemodule/sharemodule.module';
@NgModule({
  imports: [
    SharemoduleModule,
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, DashboardComponent],
  providers: [],
  exports: [],
  bootstrap: []
})
export class HomeModule {
  constructor() {
    console.log('Home Module');
  }
 }
