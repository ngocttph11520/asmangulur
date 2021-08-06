import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, forkJoin  } from 'rxjs';
import { Books } from '../models/books';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  private bookApi: string = "http://localhost:3000/books/";  

  constructor(private http: HttpClient) { }

  getAll(filter: any): Observable<any>{
    // return this.http.get<Books[]>(this.bookApi); 
    let requestUrl = this.bookApi + "?_expand=category&_expand=author";
    
    if(filter.keyword.length > 0){
      requestUrl += `&title_like=${filter.keyword}`;
    }
    
    return this.http.get<any>(requestUrl);
    
  }
  getAlls(): Observable<Books[]>{
    let requestUrl = `${this.bookApi}?_expand=category&_expand=author`;
    return this.http.get<Books[]>(requestUrl);
  }
  
  findById(id: any): Observable<any>{
    let requestUrl = `${this.bookApi}/${id}?_expand=category&_expand=author`;
    return this.http.get<any>(requestUrl);
  }
  removeByID(bookId: Number): Observable<any>{
    return this.http.delete<any>(this.bookApi + bookId);
  }
 
  removeMultiple(idList: any[]): Observable<any>{
    let requestUrls = idList.map(
      id => this.http.delete<any>(`${this.bookApi}/${id}`)
    );
    
    return forkJoin(requestUrls);
  }
  store(object: Books): Observable<Books>{
    let requestUrl = `${this.bookApi}?_expand=category&_expand=author`;
    return this.http.post<Books>(requestUrl, object);
  }
  update(object: any): Observable<any>{
    let requestUrl = `${this.bookApi}/${object.id}?_expand=category&_expand=author`;
    return this.http.put<any>(requestUrl, object);
  }
}