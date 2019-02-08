import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proiectColectiv-client';

  @ViewChild(ToastContainerDirective) toastContainer: ToastContainerDirective;

  constructor(
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
     this.toastrService.overlayContainer = this.toastContainer;
  }
}
