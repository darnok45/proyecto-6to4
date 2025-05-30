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
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService){}

  ngOnInit(): void {
    // Escucha los cambios en el carrito para actualizar la cantidad total de productos

    this.carritoService.carrito$.subscribe((productos: { producto: Producto,cantidad : number}[]) => {
      this.cantidadProductos = productos.reduce((total, item) => total + item.cantidad,0) //Suma la cantidad de productos
    })
  }

  onCarritoClick(){
    console.log('Carrito clicked');
  }

}
