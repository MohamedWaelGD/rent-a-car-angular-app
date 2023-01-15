import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-addCar',
  templateUrl: './addCar.component.html',
  styleUrls: ['./addCar.component.css']
})
export class AddCarComponent implements OnInit {

  brands!: Brand[];
  models: number[] = [
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
  ];

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getCategories().subscribe(data => {
      this.brands = data;
    })
  }

}
