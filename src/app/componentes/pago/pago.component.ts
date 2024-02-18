import { Component } from '@angular/core';
import { PagosService } from 'src/app/services/pagos/pagos.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {

  constructor(private pagoService: PagosService){

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
