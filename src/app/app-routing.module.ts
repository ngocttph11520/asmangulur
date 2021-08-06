import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { BooksListComponent } from './screens/admin/books-list/books-list.component';
import { BooksNewComponent } from './screens/admin/books-new/books-new.component';
import { CateEditComponent } from './screens/admin/cate-edit/cate-edit.component';
import { CateListComponent } from './screens/admin/cate-list/cate-list.component';
import { CateNewComponent } from './screens/admin/cate-new/cate-new.component';
import { DashboardComponent } from './screens/admin/dashboard/dashboard.component';
import { DemoUploadComponent } from './screens/admin/demo-upload/demo-upload.component';
import { BookDetailComponent } from './screens/book-detail/book-detail.component';
import { BookListComponent } from './screens/book-list/book-list.component';
import { HeroListComponent } from './screens/hero-list/hero-list.component';
import { BooksEditComponent } from './screens/admin/books-edit/books-edit.component';

import { ListCateComponent } from './screens/list-cate/list-cate.component';
import { AuthorListComponent } from './screens/admin/author-list/author-list.component';
import { AuthorNewComponent } from './screens/admin/author-new/author-new.component';
import { AuthorEditComponent } from './screens/admin/author-edit/author-edit.component';



const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: "",
        component: BookListComponent
      },
      {
        path: "chi-tiet/:bookId",
        component: BookDetailComponent
      },
      {
        path: "danh-muc/:id",
        component: ListCateComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "danh-muc",
        component: CateListComponent,
      },
      {
        path: "danh-muc/new",
        component: CateNewComponent
      },
      {
        path: "danh-muc/edit/:id",
        component: CateEditComponent
      },
      {
        path: "sach",
        component: BooksListComponent
      },
      {
        path: "upload-file",
        component: DemoUploadComponent
      },
      {
        path: "sach/new",
        component: BooksNewComponent
      },
      {
        path: "sach/edit/:id",
        component: BooksEditComponent,
      },
      {
        path: "tac-gia",
        component: AuthorListComponent
      },
      {
        path: "tac-gia/new",
        component: AuthorNewComponent,
      },
      {
        path: "tac-gia/edit/:id",
        component: AuthorEditComponent,
      }
    ]
  },

  {
    path: '**',
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }