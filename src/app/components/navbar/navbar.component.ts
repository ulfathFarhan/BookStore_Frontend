import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public Current_UserName: any = localStorage.getItem('Current_UserName');
  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}
  myObj: any;
  ngOnInit(): void {
    console.log(typeof this.Current_UserName);
  }
  onClickLogout() {
    this.authService.logout();
    window.location.reload();
    this.router.navigateByUrl('home');
  }
  itemsCount() {
    return this.cartService.itemsCount();
  }
}
