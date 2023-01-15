import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  vectorCars: any[] = [
    {
      src: 'car-1.jpeg',
      title: 'Fast Cars',
    },
    {
      src: 'car-2.png',
      title: 'Big Cars',
    },
    {
      src: 'car-3.png',
      title: 'Cool Cars',
    },
  ]

  shopCars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.shopCars = data.slice(0, 6);
    })
  }

}
