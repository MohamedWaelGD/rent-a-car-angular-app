import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from '../notFound/notFound.component';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './carsList/carsList.component';
import { ClientComponent } from './client.component';
import { NavbarComponent } from '../../navbar/navbar.component';
import { CustomModule } from '../../customModule/custom.module';
import { CarDetailsComponent } from './carsList/carDetails/carDetails.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'cars', component: CarsListComponent },
      { path: 'cars/:id', component: CarDetailsComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CustomModule
  ],
  declarations: [
    ClientComponent,
    HomeComponent, 
    CarsListComponent,
    CarDetailsComponent,
    ProfileComponent
    ],
    exports: [
      ClientComponent,
      HomeComponent, 
      CarsListComponent,
      CarDetailsComponent,
      ProfileComponent
  ]
})
export class ClientModule { }
