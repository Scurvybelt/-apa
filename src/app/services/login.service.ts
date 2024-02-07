import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlLoginUsuario = 'http://localhost:3000/login';
  
  constructor(private httpClient: HttpClient) {

  }

  loginUsuario(datosUsuario: any){
    return this.httpClient.post(this.urlLoginUsuario,datosUsuario);
  }
}
