import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister } from '../register/register';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

private registerUrl = 'http://localhost:3000';
constructor(private http: HttpClient) {
}

getAllRegisters(): Observable<IRegister[]> {
  const endPoint = '/registers';
  return this.http.get<IRegister[]>(this.registerUrl + endPoint);
}

}
