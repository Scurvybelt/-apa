import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})

//  nav = document.querySelector("#nav");
//  abrir = document.querySelector("#abrir");
//  cerrar = document.querySelector("#cerrar");

// abrir.addEventListener("click", () => {
//   nav.classList.add("visible");
// })

// cerrar.addEventListener("click",() => {
//   nav.classList.remove("visible");
// })

export class CabeceroComponent {
  
  subMenu: boolean = false;

  constructor(){

  }

  mostrarMenu(){
    this.subMenu = !this.subMenu;
    console.log(this.subMenu);
  }
}


