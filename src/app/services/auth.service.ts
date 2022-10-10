import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private BASE_URL = 'http://localhost:44343/api';
  private registerUrl = '/users/register';
  private loginUrl = '/users/login';
  constructor(private http: HttpClient) {}
  register(user: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + this.registerUrl, user);
  }
  login(user: any): Observable<any> {
    return this.http.post<any>(this.BASE_URL + this.loginUrl, user);
  }

  checkToken(): boolean {
    if (localStorage.getItem('Current_UserId')) {
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.clear();
  }
}
