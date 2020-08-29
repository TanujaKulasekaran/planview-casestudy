import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRegister } from '../register/register';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private mockUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

 getAllEmployees(): Observable<IRegister[]> {
   const endPoint = '/registers';
   return this.http.get<IRegister[]>(this.mockUrl + endPoint);
 }

 deleteEmployee(id: number): Observable<IRegister> {
   const endpoint = '/registers' + '/' + id;
   return this.http.delete<IRegister>(this.mockUrl + endpoint);
 }

}
