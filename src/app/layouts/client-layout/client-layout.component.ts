import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.css']
})
export class ClientLayoutComponent implements OnInit {
  cates: Category[]= []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAlls().subscribe(data => {
      this.cates = data;
    })
  }

}
