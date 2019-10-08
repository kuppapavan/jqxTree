import {Injectable, PipeTransform} from '@angular/core';

import {BehaviorSubject, Observable, of, Subject} from 'rxjs';

import {DecimalPipe} from '@angular/common';
import {debounceTime, delay, switchMap, tap} from 'rxjs/operators';
import {SortDirection} from './sortable.directive';
import { VideoWall } from './modals/controls.modal';
import { HttpapiService } from './services/httpapi.service';
import { HttpAPI } from './services/httpapi.enum';


interface SearchResult {
  VideoWall_Messages: VideoWall[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(VideoWallMessages: VideoWall[], column: string, direction: string): VideoWall[] {
  if (direction === '') {
    return VideoWallMessages;
  } else {
    return [...VideoWallMessages].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(VideoWallMessagE: VideoWall, term: string, pipe: PipeTransform) {

  // return pipe.transform(VideoWallMessagE.tbldashboardFrequencyId).includes(term)
  //   || VideoWallMessagE.tbldashboardStatust.toLowerCase().includes(term.toLowerCase())
  //   || VideoWallMessagE.tbldashboardText.toLowerCase().includes(term.toLowerCase());

  return VideoWallMessagE.tbldashboardText.toLowerCase().includes(term.toLowerCase())
  ||  pipe.transform(VideoWallMessagE.tbldashboardFrequencyId).includes(term)
  || VideoWallMessagE.tbldashboardStatust.toLowerCase().includes(term.toLowerCase()); ;
}


@Injectable({providedIn: 'root'})


export class VideoWallTableService {

  fetched_videowallmessages: VideoWall[] = [];

  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _messages$ = new BehaviorSubject<VideoWall[]>([]);
  private _total$ = new BehaviorSubject<number>(0);

  private _state: State = {
    page: 1,
    pageSize: 4,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };


  constructor(private pipe: DecimalPipe , private apiService: HttpapiService) {


    // this.http.get<IDetails[]>(this._url)
    // .subscribe(data => {
    //   this.uuserdetails = data;
    //      });


         this.apiService.getRequest(HttpAPI.FETCH_VIDEOWALL).subscribe( result => {
           this.fetched_videowallmessages = result;
          // this.logger.logDebug(result);
           console.log(JSON.stringify(this.fetched_videowallmessages));
              },
              error => {
          // this.logger.logSystemError(error);
                //  this.notify.showError(error);
              });



         this._search$.pipe(
                              tap(() => this._loading$.next(true)),
                              debounceTime(200),
                              switchMap(() => this._search()),
                              delay(200),
                              tap(() => this._loading$.next(false))
                            ).subscribe(result => {
                              this._messages$.next(result.VideoWall_Messages);
                              this._total$.next(result.total);
                          });

         this._search$.next();
  }

  get VideoMessages$() { return this._messages$.asObservable(); }
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  set page(page: number) { this._set({page}); }
  set pageSize(pageSize: number) { this._set({pageSize}); }
  set searchTerm(searchTerm: string) { this._set({searchTerm}); }
  set sortColumn(sortColumn: string) { this._set({sortColumn}); }
  set sortDirection(sortDirection: SortDirection) { this._set({sortDirection}); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const {sortColumn, sortDirection, pageSize, page, searchTerm} = this._state;

    // 1. sort
    let VideoWall_Messages = sort(this.fetched_videowallmessages, sortColumn, sortDirection);

    // 2. filter
    VideoWall_Messages = VideoWall_Messages.filter(abc => matches(abc, searchTerm, this.pipe));
    const total = VideoWall_Messages.length;

    // 3. paginate
    VideoWall_Messages = VideoWall_Messages.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({VideoWall_Messages, total});
  }
}

