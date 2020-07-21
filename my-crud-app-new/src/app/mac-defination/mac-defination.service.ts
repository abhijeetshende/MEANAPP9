import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MacDefination } from './mac-defination';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MacDefinationService {
  appUrl = 'http://localhost:3000';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<MacDefination[]> {
    return this.httpClient
      .get<MacDefination[]>(this.appUrl + '/mac')
      .pipe(catchError(this.errorHandler));
  }

  find(id): Observable<MacDefination> {
    return this.httpClient
      .get<MacDefination>(this.appUrl + '/mac/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  create(Mac): Observable<MacDefination> {
    return this.httpClient
      .post<MacDefination>(this.appUrl + '/mac/',Mac, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  update(id, Mac): Observable<MacDefination> {
    return this.httpClient
      .put<MacDefination>(this.appUrl + '/mac/' + id, Mac, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  delete(id): Observable<MacDefination> {
    return this.httpClient
      .delete<MacDefination>(this.appUrl + '/mac/' + id, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
