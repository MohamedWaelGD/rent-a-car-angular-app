import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cars!: Car[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(data => {
      this.cars = data.splice(0, 3);
    })
  }

}
