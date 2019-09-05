import { Injectable } from '@angular/core';
import { LoginHttpStatus } from './http-status-codes';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public getHttpError(id: number, modulo: string): string {

    return LoginHttpStatus.get(id + ',' + modulo);

  }
}
