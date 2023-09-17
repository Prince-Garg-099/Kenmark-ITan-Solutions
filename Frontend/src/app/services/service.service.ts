import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private _http: HttpClient) { }
  finduser(loginFormdata: any) {
    return this._http.post<any>(`http://localhost:3000/api/login`, loginFormdata);
  }

  gettaskbyuserId(userId: any): Observable<any> {
    //console.log(userId);
    return this._http.post(`http://localhost:3000/api/tasks`, userId);
  }
  deletetaskbyid(taskId: any) {
    //console.log(taskId);
    return this._http.delete(`http://localhost:3000/api/tasks/${taskId}`);
  }

  setTaskStatus(taskId: any) {
    //console.log(taskId);
    return this._http.put(`http://localhost:3000/api/tasks/${taskId}`, {});
  }
}
