import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL = "#";

  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(private httpClient: HttpClient) { }

getAll(): Observable<Products[]> {
  return this.httpClient.get<Products[]>(this.apiURL + '/allProducts' )
  .pipe( 
    catchError(this.errorHandler)
    )
}
create(products): Observable<Products[]> {
  return this.httpClient.post<Products[]>(this.apiURL + '/ProductsInsert', JSON.stringify(products), this.httpOptions)
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