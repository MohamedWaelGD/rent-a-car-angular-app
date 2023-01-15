import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  brands!: Brand[];
  activeUrl: string = '';

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit() {
    this.brandService.getCategories().subscribe(data => {
      this.brands = data;
    })
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          this.activeUrl = this.router.url;
      });
  }

}
