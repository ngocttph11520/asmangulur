import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/books.service';
import { Books } from 'src/app/models/books';

import { ORDER_DATA } from 'src/app/mock-data/ORDER_DATA';
@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: Books[] = [];
  orderData: any[] = ORDER_DATA;
  constructor(private bookService: BookService) { }
  filterObject = {
    orderBy: "1",
    keyword: ""
  }
  ngOnInit(): void {
    this.getBookList();
    this.search();
  }
  
  getBookList(){
    this.bookService.getAlls().subscribe(data => {
      this.books = data;
    })
  }
  search(){
    this.bookService.getAll(this.filterObject).subscribe(data => {
      this.books = data;
    })
  }
  removeId(bookObj: Books){
    if(confirm('Bạn có chắc chắn muốn xóa không ?')){
      this.bookService.removeByID(bookObj.id).subscribe(data=>{
        this.books = this.books.filter(item => item.id != bookObj.id)
      })
    }
  }
}
