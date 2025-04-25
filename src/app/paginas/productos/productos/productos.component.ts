import { Component } from '@angular/core';
import { Producto } from '../../../modelos/producto.model';
import { CarritoService } from '../../../servicios/carrito.service';

@Component({
  selector: 'app-productos',
  imports: [],
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
      imagen: '',
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
