import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LastFewTransactionsComponent } from './dashboard/lastFewTransactions/lastFewTransactions.component';
import { SalesByCategoryComponent } from './dashboard/salesByCategory/salesByCategory.component';
import { SalesByMonthComponent } from './dashboard/salesByMonth/salesByMonth.component';
import { TopThreeProductsComponent } from './dashboard/topThreeProducts/topThreeProducts.component';
import { TopWidgetsComponent } from './dashboard/topWidgets/topWidgets.component';
import { AddCarComponent } from './addCar/addCar.component';
import { AddBrandComponent } from './addBrand/addBrand.component';
import { ShowCarsTableComponent } from './showCarsTable/showCarsTable.component';
import { ShowUsersTableComponent } from './showUsersTable/showUsersTable.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'addCar', component: AddCarComponent },
      { path: 'addBrand', component: AddBrandComponent },
      { path: 'cars', component: ShowCarsTableComponent },
      { path: 'users', component: ShowUsersTableComponent }
    ],
    component: AdminComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
    AdminComponent,
    LastFewTransactionsComponent,
    SalesByCategoryComponent,
    SalesByMonthComponent,
    TopThreeProductsComponent,
    TopWidgetsComponent,
    AddCarComponent,
    AddBrandComponent,
    ShowCarsTableComponent,
    ShowUsersTableComponent
  ]
})
export class AdminModule { }
