import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private urlPago = 'http://localhost:3000/pagos';


  constructor(private httpClient: HttpClient) { 

  }

  realizarPago(){
    return this.httpClient.post(this.urlPago,null);
  }
}
