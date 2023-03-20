import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl = environment.baseUrl;
userListUrl = environment.userListUrl;
  constructor(private http:HttpClient) { }
  addUser(body: { name: any; email: any; }){
    try {
      return this.http.post<any>(this.baseUrl+this.userListUrl,body)
    } catch (error:any) {
      return throwError(()=>new Error(error));
    }
  }
  getUsers(){
    try {
      return this.http.get(this.baseUrl+this.userListUrl);
    } catch (error:any) {
      return throwError(()=>new Error(error));      
    }
  }
  getUserById(id:any){
    return this.http.get(this.baseUrl+this.userListUrl+"/"+id);
  }

  updateUser(id: string,body:object){
    return this.http.put<any>(this.baseUrl+this.userListUrl+"/"+id,body);
  }
  deleteUser(userId: string){
    try {
    return this.http.delete(this.baseUrl+this.userListUrl+"/"+userId);
  }  catch (error:any) {
    return throwError(()=>new Error(error));      
  }
}}
