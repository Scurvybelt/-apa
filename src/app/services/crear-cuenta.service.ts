import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrearCuentaService {

  private urlCrearCuenta = 'http://localhost:3000/crearCuenta';

  constructor(private httpClient: HttpClient) {

  }
  verificarUsuario(email: any){
    return this.httpClient.get(this.urlCrearCuenta+`/${email}`);
  }
  
  crearCuenta(datosCliente: any){
    return this.httpClient.post(this.urlCrearCuenta,datosCliente);
  }

}
