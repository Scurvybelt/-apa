import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registros/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { CrearCuentaComponent } from './registros/crear-cuenta/crear-cuenta.component';
import { TimeLineComponent } from './componentes/time-line/time-line.component';
import { HoraComponent } from './componentes/hora/hora.component';
import { PagoComponent } from './componentes/pago/pago.component';

const routes: Routes = [
  {path:'',component:InicioComponent},
  {path:'login',component:LoginComponent},
  {path:'inicio',component: InicioComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'productos',component: ProductosComponent},
  {path:'nosotros',component: NosotrosComponent},
  {path:'servicios',component: ServiciosComponent},
  {path:'crearCuenta',component:CrearCuentaComponent},
  {path:'historia',component:TimeLineComponent},
  {path:'hora', component: HoraComponent},
  {path: 'pagos', component:PagoComponent},
  {path: '**',component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
