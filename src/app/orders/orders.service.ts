import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private apiURL = "#";

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private httpClient: HttpClient) { }

getAll(): Observable<Orders[]> {
  return this.httpClient.get<Orders[]>(this.apiURL + '/allProducts' )
  .pipe( 
    catchError(this.errorHandler)
    )
}
create(products): Observable<Orders[]> {
  return this.httpClient.post<Orders[]>(this.apiURL + '/ProductsInsert', JSON.stringify(products), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
} 

errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}
}