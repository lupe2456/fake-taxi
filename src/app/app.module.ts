import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';
const components = [
  FooterComponent,
  HomeComponent,
  AboutComponent,
  NavbarComponent,
  ReservationComponent,
  LoginComponent,
  CarListComponent,
];
@NgModule({
  declarations: [AppComponent, ...components],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
