import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  constructor(private formBuilder: FormBuilder) {}
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  onChange():void{
    console.log(this.loginForm.valid,"hd",this.loginForm.value.email,this.loginForm.value.password)
  }
}
