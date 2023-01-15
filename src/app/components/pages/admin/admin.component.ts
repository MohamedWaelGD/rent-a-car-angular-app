import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  activeUrl: any = "";

  constructor(private router: Router) 
  {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          this.activeUrl = this.router.url;
          console.log(this.activeUrl);
      });
  }

  ngOnInit() {
  }

}
