import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { CarritoServicesService } from 'src/app/services/carrito/carrito-services.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  
  cursos: any = [
    {id:1,nombre:'Curso de Pasteles',descripcion:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',precio:1000,imagen: '../../../assets/img/FotoLuzÑapa.jpg'},
    {id:2,nombre:'Curso de Pan',descripcion:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',precio:1200,imagen: '../../../assets/img/FotoLuzÑapa.jpg'},
    {id:3,nombre:'Curso Decoracion',descripcion:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',precio:900,imagen: '../../../assets/img/FotoLuzÑapa.jpg'},
    {id:4,nombre:'Curso Sopas',descripcion:'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',precio:2000,imagen: '../../../assets/img/FotoLuzÑapa.jpg'},
    
  ];

  constructor(private router: Router, private cursoServicio: CarritoServicesService){

  }

  ngOnInit(){
    window.scrollTo(0, 0);
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }  

  
  comprarCurso(curso:any){
    console.log(curso);
    this.cursoServicio.cursoSeleccionado(curso);
    this.router.navigate(['cursoDetallado']);
  }
}
