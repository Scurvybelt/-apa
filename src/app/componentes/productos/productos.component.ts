import { Component, inject } from '@angular/core';
import AOS from 'aos';
import { CarritoServicesService } from 'src/app/services/carrito/carrito-services.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  count =0;
  constructor( private carritoService: CarritoServicesService){

  }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
    window.scrollTo(0, 0);
  }

  productos: any[] = [
    {id:1,imagen: '../../../assets/img/galletas.jpeg', nombre: 'Galletas de Nuez',descripcion:'Some quick example text to build on the card title and make up the bulk of the card', precio: 100,count:0},
    {id:2,imagen:'../../../assets/img/masPanes.jpeg', nombre:'Panes', descripcion: 'Some quick example text to build on the card title and make up the bulk of the card',precio: 200 ,count:0},
    {id:3,imagen:'../../../assets/img/galletasEnv.jpeg',nombre:'Galletas Domicilio',descripcion: 'Some quick example text to build on the card title and make up the bulk of the card',precio: 300,count:0},
    {id:4,imagen:'../../../assets/img/panesBolita.jpeg',nombre:'Panes bolita',descripcion: 'Some quick example text to build on the card title and make up the bulk of the card', precio: 400 ,count:0},
    {id:5,imagen:'../../../assets/img/fresas.jpeg',nombre:'Fresas',descripcion: 'Some quick example text to build on the card title and make up the bulk of the',precio: 500,count:0},
    {id:6,imagen:'../../../assets/img/panesFrente.jpeg',nombre:'Frascos Galletas',descripcion:'Some quick example text to build on the card title and make up the bulk of the card',precio:233,count:0}
  ];

  
  agregarCarrito(producto: any){
    console.log(producto);
    this.carritoService.agregarCarrito(producto);
    
  }

  counter(idproducto:any, action:any){
    for(let i=0; i<this.productos.length; i++){
      if(idproducto == this.productos[i].id){
        if(action == 'add'){
          this.productos[i].count++;
        }else if(action == 'minus' && this.productos[i].count>0){
          this.productos[i].count--
        }
      }
    }
  }
}
