import { NavbarComponent } from './components/navbar/navbar.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';
const components = [FooterComponent, HomeComponent, AboutComponent, NavbarComponent, ReservationComponent, LoginComponent,CarListComponent];
@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
