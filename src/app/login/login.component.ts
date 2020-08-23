import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  private loginService;
  data: any;

  constructor(private fb: FormBuilder, loginService: LoginService) {
    this.loginService = loginService;

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(6)]]
    });
  }

  login() {
    console.log('KeyWithValues' + JSON.stringify(this.loginForm.value));
    this.data = this.loginForm.value.username;
    console.log('FormUsername' + JSON.stringify(this.data));

    this.loginService.getAllRegisters(this.loginForm.value).subscribe(
      //  next: registers => this.registers = registers,

      // next(login) {
      //   console.log('After Subscribe' + JSON.stringify(login));
      //   const registerData = JSON.stringify(login);
      //   console.log('After Subscribe Username' + registerData);
      //   if (this.data === login.username) {
      //     console.log('Login Successfully');
      //   } else {
      //     console.log('Please register your account');
      //   }
      // }

      response => {
            console.log(response);
      }
    );
  }
}
