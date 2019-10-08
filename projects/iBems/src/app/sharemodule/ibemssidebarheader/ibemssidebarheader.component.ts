import { Component, OnInit } from '@angular/core';
import { ServiceUrls } from '../../enums/service-urls.enum';
import { HttpClientService } from '../../services/http-apis.service';
import { ShareCommonObjectsService } from '../../services/share-common-objects.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-ibemssidebarheader',
  templateUrl: './ibemssidebarheader.component.html',
  styleUrls: ['./ibemssidebarheader.component.css']
})
export class IbemssidebarheaderComponent implements OnInit {

  headerObject  ;
  childObject ;
  childrenId ;
  constructor(private httpClient: HttpClientService,
              private sharedService: ShareCommonObjectsService,
              private route: ActivatedRoute,
              private router: Router ) {
   }

   ngOnInit() {
                    this.sharedService.castChildMenuId.subscribe(childrenId => this.childrenId = childrenId);

    this.httpClient.getRequest(ServiceUrls.HEADERS_MENU).subscribe(data => {
      this.headerObject = data;
     // console.log(' header.....' + JSON.stringify(this.headerObject));
      });
  }

                    this.httpClient.getRequest(ServiceUrls.HEADERS_MENU)
                                   .subscribe(data => {
                                     console.log('....................................................................');
                                         console.log(data);
                                                this.headerObject = data;
                                              });
              }

  navigateToModule(moduleName) {
    if(moduleName === 'alarm') {
      this.router.navigate(['/alarms/dashboard']);
    }
  }

  clickImgHeader(event) {
    this.sharedService.setDynamiChildMenuId(event.target.id);

    /* const url = ServiceUrls.CHILDREN + event.target.id;
    this.httpClient.getRequest(url).subscribe(data => {
     if (data.length > 0) {
       this.childObject = data;
     }
     }); */
  }
}
