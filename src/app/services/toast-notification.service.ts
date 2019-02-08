import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  showSuccess(title, message) {
    this.toastr.success(title, message);
  }
  showError(message) {
    this.toastr.error('Error', message);
  }
}
