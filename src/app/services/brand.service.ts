import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Brand } from '../models/brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient: HttpClient) { }

  getCategories() : Observable<Brand[]> {
    return this.httpClient.get<Brand[]>("assets/data/brands.json");
  }

  getCategoryById(id: any): Observable<Brand> {
    var subject = new Subject<Brand>();

    this.getCategories().subscribe(data => {
      for (let i = 0; i < data.length; i++)
      {
        if (data[i].id == id)
        {
          subject.next(data[i]);
          break;
        }
      }
    })

    return subject.asObservable();
  }
}
