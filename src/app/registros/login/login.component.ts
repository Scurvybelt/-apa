import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import Notiflix from 'notiflix';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private serviceLogin: LoginService, private router: Router){
    this.myForm  = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOninit(){
    window.scrollTo(0, 0);
  }

   // Agrega funciones para obtener los controles del formulario
   get email() { 
    return this.myForm.get('email'); 
  }
   get contraseña() { 
    return this.myForm.get('contraseña');
  }

  submitForm(){
    if(this.myForm.valid){
      //Checa si el usuario existe en la base de datos
      Notiflix.Loading.standard('Cargando...');
      console.log(this.myForm.value);
      this.serviceLogin.loginUsuario(this.myForm.value).subscribe((data:any)=>{
        console.log(data);
        console.log(data.usuario);
        if(data.usuario == true){
          Notiflix.Notify.success(data.data);
          this.router.navigate(['/']);
          this.myForm.reset();
        }else{
          Notiflix.Notify.failure(data.data);
        }
      });
      //Ba a buscar el usuario si existe 
    }else{
      Notiflix.Notify.failure('El formulario no es valido');
    }
    Notiflix.Loading.remove();
  }
}
