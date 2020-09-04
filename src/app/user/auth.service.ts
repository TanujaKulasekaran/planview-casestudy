import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
 currentUser: User;

 public get isLoggedIn(): boolean {
   return !!this.currentUser;
 }

 constructor() {}

  login(userName: string): void {

    if (userName === 'admin') {
      console.log('ADMIN');
      this.currentUser = {
        id: 1,
        userName,
        isAdmin: true
      };
    } else {
      console.log('USER');
      this.currentUser = {
      id: 2,
      userName,
      isAdmin: false
    };
  }
  }

  logout(): void {
    this.currentUser = null;
  }

}
