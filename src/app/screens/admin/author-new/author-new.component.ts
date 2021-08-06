import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorService } from 'src/app/services/author.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.css']
})
export class AuthorNewComponent implements OnInit {
  authorForm: FormGroup;
  constructor(private authorService: AuthorService,private router: Router) { 
    this.authorForm = this.createForm();
  }

  ngOnInit(): void {
  }
  createForm(){
    return new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }
  get f(){
    return this.authorForm.controls;
  }
  submitForm(event : any){
    event.preventDefault();
    this.authorService.store(this.authorForm.value).subscribe(data => {
      if(data.id != undefined){
        this.router.navigate(['/admin/tac-gia']);
      }
    })
  }
}
