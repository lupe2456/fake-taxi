import { Component } from '@angular/core';
import { CarService } from '../services/car.service';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss',
  standalone: false
})
export class CarListComponent {
  categoryFilter: string = '';
  priceFilter: number | null = null;
  availabilityFilter: boolean | null = null;

  cars; // 👈 Declarar primero sin inicializar

  constructor(private carService: CarService) {
    this.cars = this.carService.cars; // ✅ Ahora sí funciona
  }

  filterCars() {
    this.carService.filterCars(this.categoryFilter, this.priceFilter, this.availabilityFilter);
  }
}
