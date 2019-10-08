import { DashboardComponent } from './home/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const homeRoutes: Routes = [
 { path: '', component: HomeComponent,
  children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: '', component: DashboardComponent }
     ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
