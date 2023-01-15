import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomModule } from './components/customModule/custom.module';
import { CommonModule } from '@angular/common';
import { ClientModule } from './components/pages/client/client.module';
import { BrandService } from './services/brand.service';
import { CarService } from './services/car.service';
import { AuthModule } from './components/pages/auth/auth.module';
import { NotFoundComponent } from './components/pages/notFound/notFound.component';
import { AdminModule } from './components/pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CustomModule,
    ClientModule,
    AuthModule,
    AdminModule,
    HttpClientModule
  ],
  exports: [
    CustomModule
  ],
  providers: [
    BrandService,
    CarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
