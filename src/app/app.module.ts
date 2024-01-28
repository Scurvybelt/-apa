import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { LoginComponent } from './componentes/login/login.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxDropDownButtonModule, DxNumberBoxModule, DxPopoverModule, DxPopupModule, DxSelectBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ServiciosComponent } from './componentes/servicios/servicios.component';
import { LetrasGrandesComponent } from './componentes/letras-grandes/letras-grandes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    LoginComponent,
    PiePaginaComponent,
    NoEncontradoComponent,
    InicioComponent,
    ContactoComponent,
    ProductosComponent,
    NosotrosComponent,
    ServiciosComponent,
    LetrasGrandesComponent,
  ],
  imports: [
    DxButtonModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxTextBoxModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    BrowserModule,
    AppRoutingModule,
    DxPopoverModule,
    DxPopupModule,
    DxButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
