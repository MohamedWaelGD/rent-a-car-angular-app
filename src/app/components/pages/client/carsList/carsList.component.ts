import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { range } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carsList',
  templateUrl: './carsList.component.html',
  styleUrls: ['./carsList.component.css']
})
export class CarsListComponent implements OnInit {

  brands!: Brand[];
  cars!: Car[];
  selectedCars!: Car[];
  showedCars!: Car[];
  selectedBrandId: number = 0;
  rangePrice!: number;
  minPrice: number = Infinity;
  maxPrice: number = -1;

  maxCars: number = 6;
  currentPage: number = 1;
  minPage: number = 1;
  maxPage: number = 10;

  pagesCounter: Array<number> = [];

  constructor(private brandService: BrandService, private carService: CarService) 
  {
    this.rangePrice = this.maxPrice;
  }

  ngOnInit() {
    this.brandService.getCategories().subscribe(data => {
      this.brands = data;
    });
    this.carService.getCars().subscribe(data => {
      this.cars = data;
      this.selectedCars = [...this.cars];
      this.showedCars = [...this.selectedCars].splice(0, this.maxCars);

      this.setMinAndMaxPrice();
      this.setPages();
    });
  }

  setMinAndMaxPrice()
  {
    this.cars.forEach(e => {
      if (this.minPrice > e.price)
        this.minPrice = e.price;
      if (this.maxPrice < e.price)
        this.maxPrice = e.price;
    });
    this.rangePrice = this.maxPrice;
  }

  clearSelectedCategory()
  {
    this.selectedBrandId = 0;
  }

  selectCategory(selectedCategoryId: number)
  {
    this.selectedBrandId = selectedCategoryId;
    this.setPages();
    if (this.selectedCars.length !== 0)
      this.selectPage(1);
    else
      this.showedCars = [];
  }

  selectPrice(event: any)
  {
    this.rangePrice = event.target.value;
  }

  applyFilter()
  {
    if (this.selectedBrandId !== 0 && this.selectedBrandId !== undefined)
    {
      this.selectedCars = [...this.cars].filter((element, index, array) => {
        return (element.brandId === this.selectedBrandId)
      });
    }
    else
    {
      this.selectedCars = [...this.cars];
    }

    console.log(this.rangePrice);
    this.selectedCars = this.selectedCars.filter((element) => { return element.price <= this.rangePrice });
    this.setPages();
    this.selectPage(1);
  }

  setPages()
  {
    this.minPage = 1;
    this.maxPage = Math.ceil(this.selectedCars.length / this.maxCars);
    this.pagesCounter = Array(this.maxPage);
  }

  selectPage(pageTarget: any) {

    if (pageTarget < this.minPage)
    {
      pageTarget = this.minPage;
    }
    else if (pageTarget > this.maxPage)
    {
      pageTarget = this.maxPage;
    }

    this.currentPage = pageTarget;
    pageTarget -= 1;
    
    var startCarIndex = pageTarget * this.maxCars;
    this.showedCars = [...this.selectedCars].splice(startCarIndex, startCarIndex + this.maxCars);
  }
}
