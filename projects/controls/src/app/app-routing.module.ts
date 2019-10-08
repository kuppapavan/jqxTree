import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { VideoWallComponent } from './video-wall/video-wall.component';

const controlRoutes: Routes = [
  {
     path: '', component: ControlComponent,
     children: [
                      { path: '', component: VideoWallComponent },
                      { path: 'videoWall', component: VideoWallComponent }
               ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(controlRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor() {
    console.log('in controls routing');
  }

 }
