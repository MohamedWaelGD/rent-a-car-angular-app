import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-showCarsTable',
  templateUrl: './showCarsTable.component.html',
  styleUrls: ['./showCarsTable.component.css']
})
export class ShowCarsTableComponent implements OnInit {

  cars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data;
    })
  }

}
