import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-book-detail-page',
  templateUrl: './book-detail-page.component.html',
  styleUrls: ['./book-detail-page.component.css'],
})
export class BookDetailPageComponent implements OnInit {
  book: any;
  id: any;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getBookById(this.id).subscribe((response: any) => {
      this.book = response;
    });
  }

  ngOnInit(): void {}

  addToCart(book: any) {
    this.cartService.addToCart(book);
    window.alert('Your book has been added to the cart !');
  }
}
