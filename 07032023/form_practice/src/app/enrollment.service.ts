import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from  '@angular/common/http'
import { User } from './user';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  constructor(private _http:HttpClient) { }
  _url="http://localhost:3000/enroll";
  enroll(user:User){
   return this._http.post<any>(this._url,user)
                .pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
      return throwError(error); 
  }
}
