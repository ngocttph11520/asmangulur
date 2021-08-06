import { Component, OnInit } from '@angular/core';
import { ORDER_DATA } from 'src/app/mock-data/ORDER_DATA';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'app-list-cate',
  templateUrl: './list-cate.component.html',
  styleUrls: ['./list-cate.component.css']
})
export class ListCateComponent implements OnInit {

  constructor(private bookService: BookService) { }
  books: any;
  orderData: any[] = ORDER_DATA;
  
  filterObject = {
    orderBy: "1",
    keyword: ""
  }
  ngOnInit(): void {
    this.search();
  }
  search(){
    this.bookService.getAll(this.filterObject).subscribe(data => {
      this.books = data;
    })
  }
}
