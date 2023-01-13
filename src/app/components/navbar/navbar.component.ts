import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: any[] = [
    {
      name: 'SUV Cars',
      link: '',
    },
    {
      name: 'Hatchback',
      link: '',
    },
    {
      name: 'Crossover',
      link: '',
    },
    {
      name: 'Convertible',
      link: '',
    },
    {
      name: 'Sedan',
      link: '',
    },
    {
      name: 'Sports Cars',
      link: '',
    },
    {
      name: 'Coupe',
      link: '',
    },
    {
      name: 'Minivan',
      link: '',
    },
    {
      name: 'Station Wagon',
      link: '',
    },
    {
      name: 'Pickup Truck',
      link: '',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
