import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(public toastr: ToastrManager) {}

  showSuccess(message, position: any = 'top-right') {
    this.toastr.successToastr(message, 'Success!',
      {
        showCloseButton: true,
        position: position,
        timeOut : 3000
     });
    }
    showError(message, position: any = 'top-right') {
    this.toastr.errorToastr(message, 'Oops!',
      {
        showCloseButton: true,
        position: position,
        timeOut : 3000
      });
    }

    showWarning(message, position: any = 'top-right') {
      this.toastr.errorToastr(message, 'Alert!',
        {
          showCloseButton: true,
          position: position,
          timeOut : 3000
        });
      }

      showInfo(message, position: any = 'top-right') {
        this.toastr.errorToastr(message, 'Info',
          {
            showCloseButton: true,
            position: position,
            timeOut : 3000
          });
        }
  }
