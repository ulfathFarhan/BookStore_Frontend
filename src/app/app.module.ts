import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './components/books/books.component';
import { BookDetailPageComponent } from './pages/book-detail-page/book-detail-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    NavbarComponent,
    HomePageComponent,
    BooksPageComponent,
    BooksComponent,
    BookDetailPageComponent,
    CartComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
