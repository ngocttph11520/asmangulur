import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/books.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [];
  constructor(private authorService: AuthorService, private bookService: BookService) { }
  filterObject = {
    orderBy: "1",
    keyword: ""
  }
  ngOnInit(): void {
    this.getAuthorList();
    this.search();
  }
  getAuthorList(){
    this.authorService.getAlls().subscribe(data => {
      this.authors = data;
    })
  }
  search() {
    this.authorService.getAll(this.filterObject).subscribe(data => {
      this.authors = data;
    })
  }
  removeId(authorObj: Author){
    if(confirm('Bạn có chắc chắn muốn xóa không ?')){
      this.authorService.removeByID(authorObj.id).subscribe(data=>{
        this.authors = this.authors.filter(item => item.id != authorObj.id)
      })
    }
  }
}
