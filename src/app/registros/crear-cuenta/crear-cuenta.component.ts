import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Notiflix from 'notiflix';
import { from } from 'rxjs';
import { CrearCuentaService } from 'src/app/services/crear-cuenta.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,private creacionUsuario:CrearCuentaService){
      this.myForm = this.fb.group({
        nombre: ['', [Validators.required]],
        apellidos: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        reapeatPassword: ['', [Validators.required, Validators.minLength(6)]],
      });
  }
  ngOninit(){
    window.scrollTo(0, 0);
  }
  creacionDelUsuario(formulario:any){
    this.creacionUsuario.crearCuenta(formulario).subscribe((data:any)=>{
      console.log(data);
      if(data.disponible == false){
        Notiflix.Notify.failure(data.data);
      }else{
        Notiflix.Notify.success(data.data);
        this.myForm.reset();
      }
    });
    
  }

  submitForm(){
    Notiflix.Loading.standard('Cargando...');
    if(this.myForm.valid){
      if(this.myForm.value.password == this.myForm.value.reapeatPassword){
        let formulario = this.myForm.value;
        console.log(formulario);
        this.creacionDelUsuario(formulario);
      }else{
        console.log("Las contraseñas no coinciden");
        Notiflix.Notify.failure('las contraseñas no coinciden');
      }
    }else{
      console.log('Formulario no valido');
      Notiflix.Notify.failure('El formulario no es valido');
    }
    Notiflix.Loading.remove();
  }
}
