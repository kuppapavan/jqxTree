import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {VideoWallTableService} from '../video-wall-table.service';
import {SortDirective, SortEvent} from '../sortable.directive';
import { VideoWall } from '../modals/controls.modal';


import { HttpapiService } from '../services/httpapi.service';
import { HttpAPI } from '../services/httpapi.enum';

@Component(
    {
      selector: 'app-video-wall-table',
      templateUrl: './video-wall-table.component.html',
      providers: [VideoWallTableService, DecimalPipe]
    })

export class VideoWallTableComponent {

  editselect: any;
  @Output() selectedRowID = new EventEmitter<any>();
  VideoMessages$: Observable<VideoWall[]>;
  total$: Observable<number>;

  @ViewChildren(SortDirective) headers: QueryList<SortDirective>;

  constructor(public service: VideoWallTableService) {

    this.VideoMessages$ = service.VideoMessages$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  editDetails(detail){
    this.editselect=detail;
    alert("Edit"+JSON.stringify(this.editselect));
    const dataToEmit = {
      data: detail,
      typeOfData: 'edit'
    }
    this.selectedRowID.emit(dataToEmit);


  }
  deleteDetails(detail){
    this.editselect=detail;
    alert("Delete"+JSON.stringify(this.editselect));
    const dataToEmit = {
      data: detail,
      typeOfData: 'delete'
    }
    this.selectedRowID.emit(dataToEmit);

  }
/////////////////////////////////////////////////////////////

}
