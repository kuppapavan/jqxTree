import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from 'projects/iBemsUtils/src/app/filters/auth.guard';

const routes: Routes = [
  {path: 'iBemsControls', loadChildren: () => import('projects/controls/src/app/app.module').then(m => m.ControlAppModule)},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
