import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { IEmployee } from './employee';
export interface IEmployee{
  id:number,
  name:string,
  age:number
}
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 

private _url:string="/assets/employees.json"
  constructor(private http:HttpClient) { }
  getData():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                  
  }
}
