import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-topThreeProducts',
  templateUrl: './topThreeProducts.component.html',
  styleUrls: ['./topThreeProducts.component.css']
})
export class TopThreeProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Chart("topThreeProducts", {
      type: 'bar',
      data: {
        labels: ['SUV Cars', 'Coupe', 'Hatchack'],
        datasets: [{
          label: 'Top Three Products',
          data: [28, 24, 19],
          borderWidth: 1,
          backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
          ]
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
