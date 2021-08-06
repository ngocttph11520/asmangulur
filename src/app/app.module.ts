import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { HeroUnitComponent } from './components/hero-unit/hero-unit.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { GenderPipePipe } from './pipes/gender-pipe.pipe';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './screens/book-list/book-list.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MonsterFormComponent } from './components/monster-form/monster-form.component';
import { MonsterUnitComponent } from './components/monster-unit/monster-unit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CateListComponent } from './screens/admin/cate-list/cate-list.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { CateNewComponent } from './screens/admin/cate-new/cate-new.component';
import { CateEditComponent } from './screens/admin/cate-edit/cate-edit.component';
import { BooksListComponent } from './screens/admin/books-list/books-list.component';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  AngularFireStorageReference,
} from "@angular/fire/storage";
import { environment } from "../environments/environment";
import { DemoUploadComponent } from './screens/admin/demo-upload/demo-upload.component';
import { BooksNewComponent } from './screens/admin/books-new/books-new.component';
import { BooksEditComponent } from './screens/admin/books-edit/books-edit.component';


import { ListCateComponent } from './screens/list-cate/list-cate.component';
import { AuthorListComponent } from './screens/admin/author-list/author-list.component';
import { AuthorNewComponent } from './screens/admin/author-new/author-new.component';
import { AuthorEditComponent } from './screens/admin/author-edit/author-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroUnitComponent,
    HeroFormComponent,
    GenderPipePipe,
    BookListComponent, 
    BookDetailComponent, 
    ClientLayoutComponent, 
    AdminLayoutComponent, 
    MonsterFormComponent, 
    MonsterUnitComponent, 
    CateListComponent, 
    DashboardComponent, 
    CateNewComponent, 
    CateEditComponent, 
    BooksListComponent, 
    DemoUploadComponent, 
    BooksNewComponent, 
    BooksEditComponent,  
    ListCateComponent, AuthorListComponent, AuthorNewComponent, AuthorEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
