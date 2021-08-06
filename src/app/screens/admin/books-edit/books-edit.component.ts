import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/books.service';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { AuthorService } from 'src/app/services/author.service';
import { Author } from 'src/app/models/author';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-cate-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {
  bookId!: string;
  editForm: FormGroup;
  cates: Category[] = [];
  authors: Author[] = [];
  downloadURL!: Observable<string>;
  linkImg!: string;
  constructor(
    private categoryService: CategoryService, private authorService: AuthorService,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private storage: AngularFireStorage
  ) {
    this.editForm = this.createForm();
  }
  
  async ngOnInit() {
    await this.route.params.subscribe(params => {
      this.bookId = params.id
  
  
    });
    await this.bookService.findById(this.bookId).subscribe(book => {
      this.editForm.setValue({
        id: book.id,
        title: book.title,
        image: book.image,
        price: book.price,
        categoryId: book.category.name,
        authorId: book.author.name
        
      })
   

    });
    this.categoryService.getAlls().subscribe(data => {
      this.cates = data;
      
    }),
    this.authorService.getAlls().subscribe(data => {
      this.authors = data;
      
    })
  }

  createForm(){
    return new FormGroup({
      id: new FormControl(),
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      image: new FormControl(),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      categoryId: new FormControl(),
      authorId: new FormControl()
    })
  }

  get f(){
    return this.editForm.controls;
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

  submitForm(event : any){
    event.preventDefault();
    this.editForm.value.image = this.linkImg;
    this.bookService.update(this.editForm.value).subscribe(data => {
      this.router.navigate(['/admin/sach']);
    })
  }

}