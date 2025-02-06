import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';

import { CarListComponent } from './components/car-list/car-list.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
const components = [FooterComponent, CarListComponent, HomeComponent];
@NgModule({
  declarations: [AppComponent, ...components],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
