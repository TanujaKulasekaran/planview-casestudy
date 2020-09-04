import { IAlert } from './alert';
import { RegisterService } from './register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { IRegister } from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
 registerForm: FormGroup;

 emailMessage: string;
 private validationMessages = {
  required: 'Please enter your email address.',
  email: 'Please enter a valid email address.'
};

  registers: IRegister[];
  errorMessage: any;
  data: any;
  postData: IRegister;
  alerts: IAlert;

  private registerService;
  constructor(private fb: FormBuilder, registerService: RegisterService) {
    this.registerService = registerService;

 }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
       id: [''],
       firstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
       lastName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')]],
       dateOfBirth: ['', Validators.required],
       emailAddress: ['', [Validators.required, Validators.email]],
       addressLine1: ['', Validators.required],
       addressLine2: '',
       city: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
       state: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
       country: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
       zipCode: ['', [Validators.required, Validators.pattern('[0-9]{1,6}')]],
       username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
       passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*'), Validators.minLength(6)]],
        reenterPassword: ['', Validators.required]
       }, {validator: passwordMatcher})
    }
    );

    const emailControl = this.registerForm.get('emailAddress');
    emailControl.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe(
      value => this.setMessage(emailControl)
    );

    function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {
      const passwordControl = c.get('password');
      console.log('passwordControl' + passwordControl);
      const reenterpasswordControl = c.get('reenterPassword');
      if (passwordControl.pristine || reenterpasswordControl.pristine) {
        return null;
      }

      if (passwordControl.value === reenterpasswordControl.value) {
        return null;
      }
      return { match: true };
    }
  }

  setMessage(c: AbstractControl): void {
    this.emailMessage = '';
    if ((c.touched || c.dirty) && c.errors) {
      this.emailMessage = Object.keys(c.errors).map(
        key => this.validationMessages[key]).join(' ');
    }
  }
  save() {
    console.log('KeyWithValues' + JSON.stringify(this.registerForm.value));

    this.registerService.postRegisters(this.registerForm.value).subscribe({
    next(register) {
        console.log('After Subscribe' + register);
      }

    });

  }
}
