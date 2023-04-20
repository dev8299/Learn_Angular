import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'; //lay dc gia tri cuoi cung

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private _textFromHelloSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  textFromHello$: Observable<string> =
    this._textFromHelloSubject.asObservable();

  //lay dc gia tri _textFromHello ở bên ngoài dc (đang dùng priavte)
  // get textFromHello(): string {
  //   return this._textFromHelloSubject;
  // }

  // setTextFromHello(text: string) {
  //   this._textFromHelloSubject = text;
  // }

  setTextFromHello(text: string) {
    this._textFromHelloSubject.next(text);
  }
}
