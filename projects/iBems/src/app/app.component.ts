import { Component, OnDestroy, ElementRef } from '@angular/core';
import { ShareCommonObjectsService } from './services/share-common-objects.service';
import {Router, Params, NavigationStart, NavigationEnd, Event} from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Spinkit } from 'ng-http-loader';
import { Subscription } from 'rxjs';
import {ProgressBarModalComponent} from './progressbar-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {Keepalive} from '@ng-idle/keepalive';
import {EventTargetInterruptSource, Idle} from '@ng-idle/core';
import { environment } from '../environments/environment';


export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  public spinkit = Spinkit;
   title = 'iBems';
   defaultUrl: string;
   baseUrl: string;
   subscription: Subscription;
   idleState = 'NOT_STARTED';
   timedOut = false;
   lastPing?: Date = null;
   progressBarPopup: NgbModalRef;
   currentUrl: any;


  constructor(private http: HttpClient,
              private router: Router,
              private element: ElementRef,
              private idle: Idle,
              private keepalive: Keepalive,
              private ngbModal: NgbModal) {
                this.subscription = router.events.subscribe((event) => {
                    if (event instanceof NavigationStart) {
                      browserRefresh = !router.navigated;
                    }
                });
                router.events.subscribe((event: Event) => {

                  if (event instanceof NavigationEnd ) {
                    this.currentUrl = event.url;
                  }
                });

                 // sets an idle timeout.
                idle.setIdle(environment.SESSION_TIMEOUT);
                  // sets a timeout period .
                idle.setTimeout(environment.SESSION_ALERT);
                  // sets the interrupts like Keydown, scroll, mouse wheel, mouse down, and etc
                idle.setInterrupts([
                    new EventTargetInterruptSource(
                      this.element.nativeElement, 'keydown DOMMouseScroll mousewheel mousedown touchstart touchmove scroll')]);

                idle.onIdleEnd.subscribe(() => {
                    this.idleState = 'NO_LONGER_IDLE';
                  });

                idle.onTimeout.subscribe(() => {

                    this.idleState = 'TIMED_OUT';
                    this.timedOut = true;
                    this.closeProgressForm();
                  });

                idle.onIdleStart.subscribe(() => {

                  if(this.currentUrl === '/authenticate/login') {
                    this.reset();

                  }else {
                    this.idleState = 'IDLE_START', this.openProgressForm(1);
                  }

                  });

                idle.onTimeoutWarning.subscribe((countdown: any) => {

                    this.idleState = 'IDLE_TIME_IN_PROGRESS';
                    this.progressBarPopup.componentInstance.count = (Math.floor((countdown - 1) / 60) + 1);
                    this.progressBarPopup.componentInstance.progressCount = this.reverseNumber(countdown);
                    this.progressBarPopup.componentInstance.countMinutes = (Math.floor(countdown / 60));
                    this.progressBarPopup.componentInstance.countSeconds = countdown % 60;
                  });

                  // sets the ping interval to 15 seconds
                keepalive.interval(15);
                  /**
                   *  // Keepalive can ping request to an HTTP location to keep server session alive
                   * keepalive.request('<String URL>' or HTTP Request);
                   * // Keepalive ping response can be read using below option
                   * keepalive.onPing.subscribe(response => {
                   * // Redirect user to logout screen stating session is timeout out if if response.status != 200
                   * });
                   */



                this.reset();


              }


              ngOnDestroy() {
                this.subscription.unsubscribe();
                this.resetTimeOut();
              }




              reset() {
                this.idle.watch();
                this.idleState = 'Started.';
                this.timedOut = false;
              }


              reverseNumber(countdown: number) {
                return (300 - (countdown - 1));
              }

              openProgressForm(count: number) {
                this.progressBarPopup = this.ngbModal.open(ProgressBarModalComponent, {
                  backdrop: 'static',
                  keyboard: false
                });
                this.progressBarPopup.componentInstance.count = count;
                this.progressBarPopup.result.then((result: any) => {
                  if (result !== '' && 'logout' === result) {
                    this.logout();
                  } else {
                    this.reset();
                  }
                });
              }

        logout() {
          this.resetTimeOut();
        }

        closeProgressForm() {
          this.progressBarPopup.close();
        }

        resetTimeOut() {
          this.idle.stop();
          this.idle.onIdleStart.unsubscribe();
          this.idle.onTimeoutWarning.unsubscribe();
          this.idle.onIdleEnd.unsubscribe();
          this.idle.onIdleEnd.unsubscribe();
        }
}
