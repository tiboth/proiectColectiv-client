// import {Injectable} from '@angular/core';
// import {Router} from '@angular/router';
// import {ToastrService} from 'ngx-toastr';
//
// @Injectable()
// export class UtilService {
//
//   constructor(private toastrService: ToastrService,
//               private router: Router) {
//   }
//
//   // createLinkToastr(message: string, title: string, bugId: string) {
//   //   this.translateService.get(`showNotification.${title}`)
//   //     .subscribe(titleResult =>
//   //       this.toastrService.info(message, titleResult, {
//   //         progressAnimation: 'increasing',
//   //         progressBar: true,
//   //         timeOut: undefined,
//   //         positionClass: 'toast-bottom-right',
//   //         extendedTimeOut: 10000,
//   //         enableHtml: true,
//   //       }).onTap.subscribe(() => this.router.navigateByUrl(`/bugs/showBug/${bugId}`)));
//   // }
//   //
//   // createToastr(message: string, title: string) {
//   //   this.translateService.get(`showNotification.${title}`)
//   //     .subscribe(titleResult =>
//   //       this.toastrService.info(message, titleResult, {
//   //         progressAnimation: 'increasing',
//   //         progressBar: true,
//   //         timeOut: undefined,
//   //         positionClass: 'toast-bottom-right',
//   //         extendedTimeOut: 10000,
//   //         enableHtml: true,
//   //       }));
//   // }
//
//   createToastrSuccsess(message: string, title: string) {
//     this.toastrService.success(message, title, {
//       progressAnimation: 'increasing',
//       progressBar: true,
//       timeOut: undefined,
//       positionClass: 'toast-bottom-right',
//       closeButton: true,
//       extendedTimeOut: 10000
//     });
//   }
//
//   createToastrError(message: string, title: string) {
//     this.toastrService.error(message, title, {
//       progressAnimation: 'increasing',
//       progressBar: true,
//       timeOut: undefined,
//       positionClass: 'toast-bottom-right',
//       closeButton: true,
//       extendedTimeOut: 10000
//     });
//   }
// }
