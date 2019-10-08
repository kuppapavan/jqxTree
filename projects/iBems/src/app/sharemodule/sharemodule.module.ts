import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IbemsheaderComponent } from './ibemsheader/ibemsheader.component';
import { FooterComponent } from './footer/footer.component';
import { IbemssidemenuComponent } from './ibemssidemenu/ibemssidemenu.component';
import { IbemssidebarheaderComponent } from './ibemssidebarheader/ibemssidebarheader.component';

@NgModule({
  declarations: [IbemsheaderComponent,FooterComponent, IbemssidemenuComponent, IbemssidebarheaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    IbemsheaderComponent, FooterComponent, IbemssidemenuComponent, IbemssidebarheaderComponent
  ],
  providers: [ ]
})
export class SharemoduleModule { }
