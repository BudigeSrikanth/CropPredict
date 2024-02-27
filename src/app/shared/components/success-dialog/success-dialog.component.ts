import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {
  @Input() message: string;
  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {}

  onClose() {
    this.modal.dismiss();
  }
}
