import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: any[] = [];
  cat: any;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cat = activatedRoute.snapshot.paramMap.get('cat');
    console.log(activatedRoute.snapshot);
    this.dataService.getProductByCat(this.cat).subscribe((response: any) => {
      this.books = response;
    });
  }

  ngOnInit(): void {}
}
