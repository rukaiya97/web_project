import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Enroll } from './enroll';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
private baseURL ="http://localhost:8080/api/Client/";

  constructor(private httpclient:HttpClient) { }

  getEnrollList(): Observable<Enroll[]>{
    return this.httpclient.get<Enroll[]>(`${this.baseURL}`);
  }

  createEnroll(enroll: Enroll): Observable<Object>{
    return this.httpclient.post(`${this.baseURL}`, enroll);
  }

  getEnrollID(id: number): Observable<Enroll>{
    return this.httpclient.get<Enroll>(`${this.baseURL}${id}`);
  }

  deleteEnroll(id: number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}${id}`);
  }

  updateEmployee(id: number, enroll: Enroll): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`, enroll);



}

}
