import { Injectable, signal, WritableSignal } from '@angular/core';

export interface Car {
  id: number;
  brand: string;
  model: string;
  category: string;
  price: number;
  available: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsData: Car[] = [
    { id: 1, brand: 'Toyota', model: 'Corolla', category: 'Sedán', price: 500, available: true },
    { id: 2, brand: 'Ford', model: 'Mustang', category: 'Deportivo', price: 1200, available: false },
    { id: 3, brand: 'Chevrolet', model: 'Tahoe', category: 'SUV', price: 800, available: true }
  ];

  cars: WritableSignal<Car[]> = signal(this.carsData); // ✅ Signal correctamente definida

  filterCars(category: string, price: number | null, available: boolean | null) {
    let filteredCars = this.carsData.filter(car =>
      (!category || car.category.toLowerCase().includes(category.toLowerCase())) &&
      (price === null || car.price <= price) &&
      (available === null || car.available === available)
    );
    this.cars.set(filteredCars); // ✅ Actualización correcta del Signal
  }
}
