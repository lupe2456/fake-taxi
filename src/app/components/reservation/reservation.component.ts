import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  // Definimos el formulario reactivo
  reservationForm: FormGroup;

  // Lista de autos disponibles
  cars = [
    { id: 1, name: 'Toyota - Corolla (Sedán)' },
    { id: 2, name: 'Ford - Mustang (Deportivo)' },
    { id: 3, name: 'Chevrolet - Tahoe (SUV)' }
  ];

  // Lista de métodos de pago disponibles
  paymentMethods = ['Tarjeta de crédito', 'PayPal', 'Transferencia bancaria'];

  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con sus controles y validaciones
    this.reservationForm = this.fb.group({
      car: ['', Validators.required], // Campo requerido
      startDate: ['', Validators.required], // Campo requerido
      endDate: ['', Validators.required], // Campo requerido
      paymentMethod: ['', Validators.required] // Campo requerido
    });
  }

  // Método que se ejecuta al enviar el formulario
  submitReservation() {
    if (this.reservationForm.valid) {
      // Si el formulario es válido, mostramos los datos en la consola
      console.log('Reserva enviada:', this.reservationForm.value);
    } else {
      // Si el formulario es inválido, mostramos un mensaje de error
      console.log('Faltan datos en la reserva');
    }
  }
}
