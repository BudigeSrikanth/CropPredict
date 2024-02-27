import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../components/success-dialog/success-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private modalService: NgbModal) {}
  error(messages: string[], buttonText: string = 'Try Again', onCloseCallback: () => void = () => {}) {
    const modalRef = this.modalService.open(ErrorDialogComponent, {
      modalDialogClass: 'modal_error modal-confirm',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.messages = messages;
    modalRef.componentInstance.buttonText = buttonText;

    modalRef.result.then(
      () => {},
      () => {
        onCloseCallback();
      },
    );
  }

  success(message: string) {
    const modalRef = this.modalService.open(SuccessDialogComponent, {
      modalDialogClass: 'modal_success modal-confirm',
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.message = message;
    modalRef.result.then(
      () => {},
      () => {},
    );
  }
}
