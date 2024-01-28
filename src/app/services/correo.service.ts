import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import the 'HttpClient' module
@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  private urlCorreo = 'http://localhost:3000/contacto';

  constructor(private httpClient: HttpClient) { } // Declare 'httpClient' as a dependency in the constructor

  enviarCorreo(params: any) {
    return this.httpClient.post(this.urlCorreo, params);
  }
  
}
