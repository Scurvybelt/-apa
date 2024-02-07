import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as Notiflix from 'notiflix';
import { CorreoService } from 'src/app/services/correo.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
  myForm:FormGroup;
  private emailEmpresa = 'eduardoavilat2002@gmail.com';

  constructor(private fb: FormBuilder,private httpClient:HttpClient, private correoServices:CorreoService, private route: ActivatedRoute){
    // this.datos = new FormGroup({
    //   nombre: new FormControl('',Validators.required),
    //   apellidos: new FormControl('',Validators.required),
    //   asunto: new FormControl('',Validators.required),
    //   mensaje: new FormControl('',Validators.required)
    // })
    this.myForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      asunto: ['', [Validators.required]],
      mensaje: ['', [Validators.required]],
    })
  }
  ngOnInit():void{
    window.scrollTo(0, 0);
  }
  
  enviarCoreo(){
    if(this.myForm.valid){
      Notiflix.Loading.standard('Cargando...');
      let params = {
        email: this.emailEmpresa,
        asunto: this.myForm.value.nombre+" "+this.myForm.value.apellidos+" "+this.myForm.value.asunto,
        mensaje: this.myForm.value.mensaje
      };
      this.correoServices.enviarCorreo(params).subscribe((data: any)=>{
        console.log(data);
        if(data){
          Notiflix.Notify.success('Mensaje enviado correctamente');
          
        }else{
          Notiflix.Notify.failure('Error al enviar el correo');
        } 
      });
      Notiflix.Loading.remove();
      this.vaciarFormulario();
    }else{
      Notiflix.Notify.failure('Faltan Campos por llenar');
    }
  }

  vaciarFormulario(){
    this.myForm.reset();
  }
}
