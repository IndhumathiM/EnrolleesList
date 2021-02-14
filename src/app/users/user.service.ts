import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpClient: HttpClient
  apiURL = "/enrollees";

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  usersAction = {
    getUsers: (): Observable<any> => {
      return this.httpClient.get(this.apiURL);
    },
   
    updateUser: (id:string, result:any): Observable<any> => {
      return this.httpClient.put(this.apiURL+'/' + id, result);
    },
   
    
  }

}
