import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private BASE_URL = 'http://localhost:44343/api';

  constructor(private http: HttpClient) {}

  getCategory(): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/category`);
  }
  getProductByCat(category: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/boooks/category/${category}`);
  }
  getBookById(id: any): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/boooks/${id}`);
  }
}
