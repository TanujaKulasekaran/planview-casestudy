import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from '../register/register';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data: any;
  allEmployees: IRegister[];

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private loginService: LoginService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(6)]]
    });

    this.getAllEmployees();
  }

  login(loginForm) {

    if (loginForm && loginForm.valid) {
        const userName = loginForm.value.username;
        console.log('USERNAME ' + userName);

        const password = loginForm.value.password;

        this.authService.login(userName);

        const isValidUser = this.validateUser(userName, password);
        console.log('isValidUser ' + isValidUser);

        if (isValidUser && userName === 'admin') {
          this.router.navigate(['/adminDashboard']);
        } else if (isValidUser) {
          this.router.navigate(['/userDashboard']);
        } else {
          this.router.navigate(['/register']);
        }
    }

  }

  validateUser(username: string, password: string): boolean {
    console.log(this.allEmployees);

    for (const entry of this.allEmployees) {
      if (entry.username === username && entry.password === password) {
          console.log('Both username and password are registered');
          return true;
      }
  }
    return false;
}

  getAllEmployees() {
    this.loginService.getAllRegisters().subscribe(
    (data: IRegister[]) => {
      this.allEmployees = data;
    }
    );
  }
}
