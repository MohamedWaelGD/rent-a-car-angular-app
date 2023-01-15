import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carDetails',
  templateUrl: './carDetails.component.html',
  styleUrls: ['./carDetails.component.css']
})
export class CarDetailsComponent implements OnInit {

  selectedCar!: Car;
  carBrand!: Brand;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService, private brandService: BrandService) { }

  ngOnInit() {
    let selectedCarId = this.activatedRoute.snapshot.paramMap.get('id');
    this.carService.getCarById(selectedCarId).subscribe(carData => {
      console.log(carData);
      this.selectedCar = carData;

      this.brandService.getCategoryById(this.selectedCar.brandId).subscribe(brandData => {
        this.carBrand = brandData;
      })
    });
  }

}
