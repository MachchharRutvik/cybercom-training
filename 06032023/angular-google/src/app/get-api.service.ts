import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(private http:HttpClient) {

   }
   apiCall(data: string){
    return this.http.get(`https://ipinfo.io/${data}/geo?token=81379697d2ed5d`);
   }
}
