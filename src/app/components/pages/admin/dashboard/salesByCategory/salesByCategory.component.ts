import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-salesByCategory',
  templateUrl: './salesByCategory.component.html',
  styleUrls: ['./salesByCategory.component.css']
})
export class SalesByCategoryComponent implements OnInit {

  constructor(private brandService: BrandService) { }

  ngOnInit() {
    this.brandService.getCategories().subscribe(data => {
      new Chart("salesByCategory", {
        type: 'pie',
        data: {
          labels: data.map(e => e.name),
          datasets: [{
            label: 'Sales Ber Month',
            data: [4, 2, 3, 5, 2, 7, 7, 15, 18, 19, 18, 20],
            borderWidth: 1
          }]
        }
      });
    })
  }

}
