import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  tot: number = 0;
  constructor(private cartService: CartService) {
    this.items.forEach((i) => {
      this.tot += i.price;
    });
  }

  ngOnInit(): void {}
}
