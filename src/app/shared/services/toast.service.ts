import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts: any[] = [];
  toasts$ = new BehaviorSubject<any>(undefined);
  show(textOrTpl: string | TemplateRef<any>, options: any = {}) {
    this.toasts.push({ textOrTpl, ...options });
    this.toasts$.next(this.toasts);
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter((t) => t !== toast);
    this.toasts$.next(this.toasts);
  }

}
