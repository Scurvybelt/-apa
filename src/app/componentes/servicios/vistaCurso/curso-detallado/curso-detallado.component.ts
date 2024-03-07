import { Component } from '@angular/core';
import { CarritoServicesService } from 'src/app/services/carrito/carrito-services.service';

@Component({
  selector: 'app-curso-detallado',
  templateUrl: './curso-detallado.component.html',
  styleUrls: ['./curso-detallado.component.css']
})
export class CursoDetalladoComponent {
  curso: any;

  constructor(private servicioCurso: CarritoServicesService){
    
  }

  ngOnInit(){
    this.curso = this.servicioCurso.getCursoSeleccionado();
  }

  agregarCarritoCompra(curso: any){
    console.log(curso);
    this.servicioCurso.agregarCursoCarrito(curso);
  }
}
