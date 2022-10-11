import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { APP_CONFIG } from 'libs/utils/core/src/app-config';
import { RequestResult } from '../models/request-result';


@Injectable({
  providedIn: 'root'
})

export class RequestService<T> {
  //BaseURL = 'https://621e2099849220b1fc90490b.mockapi.io/api/v1/';

  constructor(private http: HttpClient, @Inject(APP_CONFIG) private appConfig : any) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  get(url : string): Observable<T> {
    return this.http
      .get<T>(this.appConfig.baseUrl + url)
      .pipe(retry(1), catchError(this.handleError));
  }

  getById(url : string, id: any): Observable<T> {
    return this.http
      .get<T>(this.appConfig.baseUrl + url + id)
      .pipe(retry(1), catchError(this.handleError));
  }

  post(url : string, body: T): Observable<T> {
    return this.http
      .post<T>(
        this.appConfig.baseUrl + url,
        JSON.stringify(body),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  update(url : string, id: any, body: T): Observable<T> {
    return this.http
      .put<T>(
        this.appConfig.baseUrl + url + id,
        JSON.stringify(body),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  delete(url : string, id: any) {
    return this.http
      .delete<T>(this.appConfig.baseUrl + url + id, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
