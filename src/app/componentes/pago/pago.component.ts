import { Component } from '@angular/core';
import { CarritoServicesService } from 'src/app/services/carrito/carrito-services.service';
import { PagosService } from 'src/app/services/pagos/pagos.service';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  productos: any;
  cantidad: any;
  cursos: any;
  total: undefined;

  constructor(private pagoService: PagosService, private carritoService: CarritoServicesService){

  }

  ngOnInit(){
    this.productos = this.carritoService.getItems();
    this.cursos = this.carritoService.getCursos();
    this.total = this.carritoService.getTotal();
    // console.log(this.total);
   
    console.log(this.productos);
  }

  realizarPago(){
    let datosCompra;
    this.pagoService.realizarPago().subscribe((data: any)=>{
      console.log(data);
      window.location.href = data.init_point;
    });
  }

  quitarArticulo(producto: any, index: number,tipo:String){
    if(tipo == 'producto'){
      this.carritoService.quitarArticulo(producto,index);
    }else{
      this.carritoService.quitarCurso(producto,index);
    }
    
  }
  
  
  
}
