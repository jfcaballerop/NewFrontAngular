import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, tap } from 'rxjs/operators';
import { Permission } from '../models/permission';


@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private http: HttpClient) { }

  public getAllPermissions(): Observable<Permission[]> {
    return this.http
    .get<Permission[]>(environment.apiTwpermissionUrl)
      .pipe(
        catchError(this.handleError<Permission[]>('getAllPermissions', []))
      );
  }

  public findById(id: string): Observable<Permission> {
    let url: string = environment.apiTwpermissionUrlMock + '/' + id;

    return this.http
      .get<Permission>(url)
      .pipe(
        tap(d => console.log('PermissionService ', d)),
        catchError(this.handleError<Permission>('findById', undefined))
      );
  }

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
