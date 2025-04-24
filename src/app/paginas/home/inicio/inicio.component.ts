import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  imports: [NgFor],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

productos = [
  {
    id: 1,
    nombre: "Hunk 150",
    Img:"assets/5.png",
    precio: 2000000,
  },
  
  {
    id: 2,
    nombre: "Gilera smash 125",
    Img:"assets/gilera125.png",
    precio: 1000000,
  },
]
  

  


}
