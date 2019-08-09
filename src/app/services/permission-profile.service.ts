import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PermissionProfile } from '../models/permission-profile';


@Injectable({
  providedIn: 'root'
})
export class PermissionProfileService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<PermissionProfile[]> {
    return this.http
      .get<PermissionProfile[]>(environment.apiTwPermissionProfileUrl)
      .pipe(
        tap(d => console.log('PermissionProfileService ', d)),
        catchError(this.handleError<PermissionProfile[]>('findAllRoles', []))
      );
  }

  // public findById(): Observable<PermissionProfile> {
  //   return this.http
  //     .get<PermissionProfile>(environment.apiTwPermissionProfileUrl)
  //     .pipe(
  //       tap(d => console.log('PermissionProfileService ', d)),
  //       catchError(this.handleError<PermissionProfile>('findAllRoles', []))
  //     );
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
