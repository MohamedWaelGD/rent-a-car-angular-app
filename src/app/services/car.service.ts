import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscribable, Subscription } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>('assets/data/cars.json');
  }

  getCarById(id: any): Observable<Car> {
    var subject = new Subject<Car>();
    this.getCars().subscribe(data => {
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
