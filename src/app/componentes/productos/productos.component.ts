import { Component, inject } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  
  public items: any = [];
  constructor(){

  }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
    window.scrollTo(0, 0);
  }

  productos: any[] = [
    {id:1,imagen: '../../../assets/img/galletas.jpeg', nombre: 'Galletas de Nuez',descripcion:'Some quick example text to build on the card title and make up the bulk of the card', precio: 100},
    {id:2,imagen:'../../../assets/img/masPanes.jpeg', nombre:'Panes', descripcion: 'Some quick example text to build on the card title and make up the bulk of the card',precio: 200 },
    {id:3,imagen:'../../../assets/img/galletasEnv.jpeg',nombre:'Galletas Domicilio',descripcion: 'Some quick example text to build on the card title and make up the bulk of the card',precio: 300},
    {id:4,imagen:'../../../assets/img/panesBolita.jpeg',nombre:'Panes bolita',descripcion: 'Some quick example text to build on the card title and make up the bulk of the card', precio: 400 },
    {id:5,imagen:'../../../assets/img/fresas.jpeg',nombre:'Fresas',descripcion: 'Some quick example text to build on the card title and make up the bulk of the',precio: 500},
    {id:6,imagen:'../../../assets/img/panesFrente.jpeg',nombre:'Frascos Galletas',descripcion:'Some quick example text to build on the card title and make up the bulk of the card',precio:233}
    
  ];

  agregarCarrito(producto: any){
    console.log(producto);
    this.items.push(producto);
  }
  getProductos(){
    return this.items;
  }

}
