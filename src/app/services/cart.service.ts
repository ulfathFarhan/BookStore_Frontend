import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];
  constructor() {}

  addToCart(book: any) {
    var temp = JSON.parse(localStorage.getItem('items') + '');
    console.log(temp);
    this.items = temp ? temp : [];
    this.items.push(book);
    // console.log(this.items);
    localStorage.setItem('items', JSON.stringify(this.items));
    // console.log(JSON.parse(localStorage.getItem('items') + ''));
  }
  getItems() {
    var temp = JSON.parse(localStorage.getItem('items') + '');
    this.items = temp ? temp : [];
    return this.items;
  }
  itemsCount() {
    this.items = JSON.parse(localStorage.getItem('items') + '');
    if (this.items != null) return this.items.length;
    else return 0;
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('items');
    return this.items;
  }
}
