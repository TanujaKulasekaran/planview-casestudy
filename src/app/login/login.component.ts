import { AuthService } from './../user/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  data: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
      password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(6)]]
    });
  }

  login(loginForm) {

    if (loginForm && loginForm.valid) {
        const userName = loginForm.value.username;
        console.log('USERNAME ' + userName);

        this.authService.login(userName);

        if (userName === 'admin') {
          this.router.navigate(['/adminDashboard']);

        } else {
        this.router.navigate(['/userDashboard']);
        }
    }

  }
}
