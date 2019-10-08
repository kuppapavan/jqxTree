import { Component, OnInit } from '@angular/core';
import { ServiceUrls } from '../../enums/service-urls.enum';
import { HttpClientService } from '../../services/http-apis.service';
import { ShareCommonObjectsService } from '../../services/share-common-objects.service';

@Component({
  selector: 'app-ibemsheader',
  templateUrl: './ibemsheader.component.html',
  styleUrls: ['./ibemsheader.component.css']
})
export class IbemsheaderComponent implements OnInit {
   
  headerObject  ;
  childObject ;
  childrenId ;
  constructor(private httpClient:HttpClientService,private sharedService: ShareCommonObjectsService) {       
   } 

   ngOnInit() {
    this.sharedService.castChildMenuId.subscribe(childrenId => this.childrenId = childrenId);
    console.log('ngoninit ibems header.....');
      
    this.httpClient.getRequest(ServiceUrls.HEADERS_MENU).subscribe(data => {
      this.headerObject = data
      console.log(' header.....'+JSON.stringify(this.headerObject)); 
      }); 
  }

  clickImgHeader(event){ 
    //this.sharedService.setDynamiChildMenuId(event.target.id);
   alert(event.target.id)
   let url = ServiceUrls.CHILDREN+event.target.id;
   this.httpClient.getRequest(url).subscribe(data => {  
    if(data.length > 0){
      this.childObject = data;
     console.log(this.childObject)
    }
    }); 
  }

  
}
