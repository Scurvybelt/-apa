import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Notiflix from 'notiflix';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  
  datos:FormGroup;
  private emailEmpresa = 'eduardoavilat2002@gmail.com';

  constructor(private httpClient:HttpClient, private correoServices:CorreoService){
    this.datos = new FormGroup({
      nombre: new FormControl('',Validators.required),
      apellidos: new FormControl('',Validators.required),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    })
  }
  ngOninit(){

  }

  enviarCoreo(){
    
    Notiflix.Loading.standard('Cargando...');
    let params = {
      email: this.emailEmpresa,
      asunto: this.datos.value.nombre+" "+this.datos.value.apellidos+" "+this.datos.value.asunto,
      mensaje: this.datos.value.mensaje
    };

    this.correoServices.enviarCorreo(params).subscribe((data: any)=>{
      console.log(data);
      Notiflix.Notify.success('Mensaje enviado correctamente');
      Notiflix.Loading.remove();
    });
    
  }


}
