import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  loginResponse = '';
  loginClass = '';
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}
  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.loginResponse = 'Login Successfully, Thank you';
        this.loginClass = 'alert-success';
        localStorage.setItem('Current_UserId', response.userId);
        localStorage.setItem('Current_UserName', response.userName);
        this.router.navigateByUrl('cart');
      },
      (error) => {
        this.loginResponse = 'Login failed, try again';
        this.loginClass = 'alert-danger';
      }
    );
  }
}
