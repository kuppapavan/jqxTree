import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { NotificationService } from 'projects/iBemsUtils/src/app/services/notification.service';
import { AuthenticationService } from 'projects/authentication/src/app/services/authentication.service';
import { AuthenticationConstants } from '../enums/constants.enum';
import { LoggerService } from 'projects/iBemsUtils/src/app/services/logger.service';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private notify: NotificationService,
                private logger: LoggerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(

          tap(resp => this.logger.logDebug(resp) ),
          catchError(err => {
          this.logger.logSystemError(err);
          switch ((err as HttpErrorResponse).status) {
            case 400: {
              this.notify.showError(AuthenticationConstants.INVALID_REQUEST);
              break;
            }
            case 404: {
              this.notify.showError(AuthenticationConstants.INVALID_URL);
              break;
            }
            case 401: {
                this.notify.showError(AuthenticationConstants.UNAUTHOIZED_USER);
                this.authenticationService.logout();
                location.reload(true);
                break;
            }
            case 403: {
              this.notify.showError(AuthenticationConstants.ACCESS_FORBIDDEN);
              break;
            }
            case 405: {
              this.notify.showError(AuthenticationConstants.METHOD_NOT_ALLOWED);
              break;
            }
            case 407: {
              this.notify.showError(AuthenticationConstants.PROXY_AUTHENTICATION);
              break;
            }
            case 408: {
              this.notify.showError(AuthenticationConstants.REQUEST_TOO_LONG);
              break;
            }
            case 409: {
              this.notify.showError(AuthenticationConstants.URL_CONFLICT);
              break;
            }
            case 500: {
              this.notify.showError(AuthenticationConstants.INTERNAL_ERROR);
              break;
            }
            case 501: {
              this.notify.showError(AuthenticationConstants.NOT_IMPLEMENTED);
              break;
            }
            case 502: {
              this.notify.showError(AuthenticationConstants.BAD_GATEWAY);
              break;
            }
            case 503: {
              this.notify.showError(AuthenticationConstants.SERVICE_UNAVAILABLE);
              break;
            }
            case 504: {
              this.notify.showError(AuthenticationConstants.GATEWAY_TIMEDOUT);
              break;
            }
            case 505: {
              this.notify.showError(AuthenticationConstants.VERSION_NOT_SUPPORTED);
              break;
            }
            case 415: {
              this.notify.showError(AuthenticationConstants.UNSUPPORTED_MEDIA_TYPE);
              break;
            }
            case 414: {
              this.notify.showError(AuthenticationConstants.REQUEST_URL_LONG);
              break;
            }
            default: {
              const error = err.error.message || err.statusText;
              this.logger.logError(err.error.message);
              this.notify.showError(err.statusText);
              return throwError(error);
            }
         }
        }));
    }
}
