import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/services/books.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-cate-list',
  templateUrl: './cate-list.component.html',
  styleUrls: ['./cate-list.component.css']
})
export class CateListComponent implements OnInit {
  cates: Category[] = [];

  constructor(private cateService: CategoryService,
    private bookService: BookService
  ) { }

  filterObject = {
    orderBy: "1",
    keyword: ""
  }

  ngOnInit(): void {
    this.getCateList();
    this.search();
  }

  getCateList() {
    this.cateService.getAlls().subscribe(data => {
      this.cates = data;
    })
  }
  search() {
    this.cateService.getAll(this.filterObject).subscribe(data => {
      this.cates = data;
    })
  }
  removeId(cateObj: Category){
    if(confirm('Bạn có chắc chắn muốn xóa không ?')){
      this.cateService.removeByID(cateObj.id).subscribe(data=>{
        this.cates = this.cates.filter(item => item.id != cateObj.id)
      })
    }
  }
}
  

