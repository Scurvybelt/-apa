import { Injectable } from '@angular/core';
import Notiflix from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class CarritoServicesService {
  private items: any = [];
  private curso: any = [];
  private cursosCarrito: any = [];
  private cantidad: any;
  private totalCompra: any;
  constructor() { }

  agregarCarrito(producto: any){
    this.items.push(producto);
    if(producto.count == 0){
      producto.count++;
    }
    this.cantidad = producto.count;
    let cantidad = producto.count;
    let precio = producto.precio;
    console.log(cantidad);
    console.log(precio);
    let total = (precio* cantidad);
    // for(let i=0; i<this.items.length; i++){
    //   this.total += this.items[i].precio * this.items[i].count;
    // }
    this.totalCompra += total;
    console.log(total);
    console.log(this.totalCompra);
    console.log(this.items);
    console.log(this.cantidad);

    Notiflix.Notify.init({ timeout: 1500 });
    Notiflix.Notify.success(producto.nombre+' Agregado al carrito Correctamente');
  }
  getItems(){
    return this.items;
  }
  quitarArticulo(producto: any, index:any){

    
    this.items.splice(index,1);
    Notiflix.Notify.init({ timeout: 1500 });
    Notiflix.Notify.warning('Quitaste '+producto.nombre+' de tu carrito');
  }

  cursoSeleccionado(curso:any){
    this.curso = curso;
  }
  getCursoSeleccionado(){
    return this.curso;
  }

  agregarCursoCarrito(curso:any){
    console.log(curso);
    this.cursosCarrito.push(curso);
    console.log(this.cursosCarrito);
    Notiflix.Notify.init({ timeout: 1500 });
    Notiflix.Notify.success(curso.nombre+' Agregado al carrito Correctamente');
  }
  getCursos(){
    return this.cursosCarrito;
  }
  quitarCurso(producto: any, index:any){
    this.items.splice(index,1);
    Notiflix.Notify.init({ timeout: 1500 });
    Notiflix.Notify.warning('Quitaste '+producto.nombre+' de tu carrito');
  }

  // setTotal(){
  //   let total = 0;
  //   for(let i=0; i<this.items.length; i++){
  //     total += this.items[i].precio * this.items[i].count;
  //   }
  //   this.total = total;
  //   console.log(total);
  // }

  getTotal(){
    return this.totalCompra;
  }

}
