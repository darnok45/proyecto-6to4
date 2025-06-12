import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../modelos/producto.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
 // Variable que almacena la cantidad total de productos en el carrito
cantidadProductos: number = 0;

// Constructor donde inyectamos el servicio del carrito
constructor(private carritoService: CarritoService) {}

// Método que se ejecuta automáticamente cuando se inicializa el componente
ngOnInit(): void {
  // Nos suscribimos al observable del carrito que emite los cambios del contenido del carrito
  this.carritoService.carrito$.subscribe({
    
    // Si la suscripción recibe un nuevo valor (una lista de productos)
    next: (productos) => {
      // Se calcula la cantidad total de productos sumando las cantidades individuales
      // reduce recorre el arreglo acumulando la suma de item.cantidad
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad, 0);
    },

    // Si ocurre un error durante la suscripción (por ejemplo, falla al obtener los datos)
    error: (err) => {
      // Se muestra un mensaje de error en la consola para depurar
      console.error('Error al obtener el carrito', err);
      
      // Se asigna 0 como valor por defecto a cantidadProductos en caso de error
      this.cantidadProductos = 0;
    }
  });
}



// Método que se ejecuta cuando el usuario hace clic en el ícono del carrito
onCarritoClick() {
  console.log('Carrito clicked'); // Muestra un mensaje en la consola como respuesta al clic
}

}