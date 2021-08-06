import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute,Router } from '@angular/router';
import { BookService } from 'src/app/services/books.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';



@Component({
  selector: 'app-books-new',
  templateUrl: './books-new.component.html',
  styleUrls: ['./books-new.component.css']
})
export class BooksNewComponent implements OnInit {
  booksForm: FormGroup;
  cates: Category[] = [];
  authors: Author[] = [];
  downloadURL!: Observable<string>;
  linkImg!: string;

  constructor(private bookService: BookService, 
    private categoryService: CategoryService, private authorService: AuthorService, private router: Router, private storage: AngularFireStorage) {
    this.booksForm = this.createForm();
  }

  ngOnInit(): void {
    this.categoryService.getAlls().subscribe(data => {
      this.cates = data;
      console.log(data)
    }),
    this.authorService.getAlls().subscribe(data => {
      this.authors = data;
      console.log(data)
    })
  }
  createForm() {
    return new FormGroup({
      id : new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      image: new FormControl(),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      categoryId: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      authorId: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }
  get f() {
    return this.booksForm.controls;
  }
  uploadImage(event : any){
    event.preventDefault();
    var n = Date.now();
    const file = event.target.files[0];
    const filePath = `Uploads/${n}-${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`Uploads/${n}-${file.name}`, file);
    task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          this.linkImg = url
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url);
      }
    });
  }
  submitForm(event: any) {
    event.preventDefault();
    this.booksForm.value.image = this.linkImg;
    
    this.bookService.store(this.booksForm.value).subscribe(data => {
      if (data.id != undefined) {
        this.router.navigate(['/admin/sach']);
      }
    })
    
  }
}
