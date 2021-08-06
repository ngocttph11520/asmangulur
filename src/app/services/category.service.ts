import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { Category } from '../models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private API_URL = "http://localhost:3000/categories/";
  constructor(private http: HttpClient) { }

  getAlls(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.API_URL}?_embed=books`);
  }
  getAll(filter: any): Observable<any>{

    let requestUrl = this.API_URL + "?_embed=books" ;
    
    if(filter.keyword.length > 1){
      requestUrl += `&name_like=${filter.keyword}`;
    }
    
    return this.http.get<any>(requestUrl);
    
  }

  findById(id: any): Observable<Category>{
    let requestUrl = `${this.API_URL}/${id}?_embed=books`;
    return this.http.get<Category>(requestUrl);
  }

  remove(id: any): Observable<any>{
    let requestUrl = `${this.API_URL}/${id}`;
    return this.http.delete<any>(requestUrl);
  }

  store(object: Category): Observable<Category>{
    return this.http.post<Category>(this.API_URL, object);
  }

  update(object: Category): Observable<any>{
    let requestUrl = `${this.API_URL}/${object.id}`;
    return this.http.put<any>(requestUrl, object);
  }
  removeByID(bookId: Number): Observable<any>{
    return this.http.delete<any>(this.API_URL + bookId);
  }
  removeMultiple(idList: any[]): Observable<any>{
    let requestUrls = idList.map(
      id => this.http.delete<any>(`${this.API_URL}/${id}`)
    );
    
    return forkJoin(requestUrls);
  }
}