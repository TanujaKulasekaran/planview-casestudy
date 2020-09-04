import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister } from './register';

@Injectable({
  providedIn: 'root'
})

export class RegisterService {

private registerUrl = 'http://localhost:3000';
constructor(private http: HttpClient) {
}

postRegisters(register: IRegister): Observable<IRegister> {
 const endPoint = '/registers';
 return this.http.post<IRegister>(this.registerUrl + endPoint , register);

}

}
