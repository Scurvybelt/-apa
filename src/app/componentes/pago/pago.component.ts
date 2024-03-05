import { Component } from '@angular/core';
import { PagosService } from 'src/app/services/pagos/pagos.service';
import { ProductosComponent } from '../productos/productos.component';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  constructor(private pagoService: PagosService, private productosService: ProductosComponent){

  }

  ngOninit(){

  }

  realizarPago(){
    let datosCompra;
    this.pagoService.realizarPago().subscribe((data: any)=>{
      console.log(data);
      window.location.href = data.init_point;
    });
    
  }
  
  
  
}
