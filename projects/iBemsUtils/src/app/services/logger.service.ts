import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private name = 'ErrorLogService';

  constructor(private logger: NGXLogger) {
    this.logger.debug('Welcome to iBems logger services');
  }

  public logError(message) {
    this.logger.error(message);
  }

  public logDebug(message) {
    this.logger.debug(message);
  }

 public  logSuccess(message) {
    this.logger.info(message);
  }


  public logSystemError(error: any) {
      if (error instanceof HttpErrorResponse) {
          console.error('There was an HTTP error.', error.message, 'Status code:', ( error as HttpErrorResponse).status);
      } else if (error instanceof TypeError) {
          console.error('There was a Type error.', error.message);
      } else if (error instanceof Error) {
          console.error('There was a general error.', error.message);
      } else {
          console.error('Nobody threw an error but something happened!', error);
      }
  }

}

