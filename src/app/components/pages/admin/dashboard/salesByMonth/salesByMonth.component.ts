import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-salesByMonth',
  templateUrl: './salesByMonth.component.html',
  styleUrls: ['./salesByMonth.component.css']
})
export class SalesByMonthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new Chart("salesByMonth", {
      type: 'line',
      data: {
        labels: ['Jaunuary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Sales Ber Month',
          data: [4, 2, 3, 5, 2, 7, 7, 15, 18, 19, 18, 20],
          borderWidth: 1
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
