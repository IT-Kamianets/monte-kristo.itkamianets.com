import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BookingModalService {
  private _open = new BehaviorSubject(false);
  open$ = this._open.asObservable();

  open() { this._open.next(true); }
  close() { this._open.next(false); }
}
