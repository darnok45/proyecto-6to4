import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  Productos: Producto[] = [
    {
      id:1,
      nombre :'Hola',
      descripcion:'lo mira feo',
      precio : 2000,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk0IwIcduouLycHMotyagv80-9y2tIntl-PA&s',
      disponibilidad : true,
    },
  ]
  constructor(private carritoService: CarritoService){}

  // Metodo para agreagr un producto al carrito
  agregar(producto: Producto){
    this.carritoService.agregarAlCarrito(producto)
    alert('Producto agregado al carrito') //Muestra el mensaje
  }

}
