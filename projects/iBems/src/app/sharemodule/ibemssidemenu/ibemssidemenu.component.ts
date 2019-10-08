import { Component, OnInit,DoCheck } from '@angular/core';
import { ShareCommonObjectsService } from '../../services/share-common-objects.service';
import { HttpClientService } from '../../services/http-apis.service';
import { ServiceUrls } from '../../enums/service-urls.enum';

@Component({
  selector: 'app-ibemssidemenu',
  templateUrl: './ibemssidemenu.component.html',
  styleUrls: ['./ibemssidemenu.component.css']
})
export class IbemssidemenuComponent implements OnInit,DoCheck {
   child_MenuId;
   sideMenuJson ;
  constructor(private httpClient: HttpClientService, private sharedService: ShareCommonObjectsService) { }

  ngOnInit() {
    
  }
  ngDoCheck(){
  this.sharedService.castChildMenuId.subscribe(child_MenuId => this.child_MenuId = child_MenuId);
 if(this.child_MenuId > 0){
  this.clickImgHeader();
 }
  
}
  clickImgHeader() {
    const url = ServiceUrls.CHILDREN + this.child_MenuId;
    this.httpClient.getRequest(url).subscribe(data => {
    if (data.length > 0) {
      this.sideMenuJson = data;
<<<<<<< .mine
      console.log(this.sideMenuJson);
||||||| .r6239
     console.log(this.sideMenuJson)
=======
    // console.log(this.sideMenuJson)
>>>>>>> .r6340
    }
    });
}

clickImgChild(event) {
  // alert(event.target.id)

    }

}
