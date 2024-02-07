import { Component, ElementRef, ViewChild } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public botonCarusel:any;
  isVisible = false;

  employees: any[] = [
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "60000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "30000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "5000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "8000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "12000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "10000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "12000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "12000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "12000",
    },
    {
      OrderID: "1000",
      City: "Newyork",
      Country: "United states",
      Region: "NorthAmerica",
      Date: "1964/03/16",
      Amount: "12000",
    },
  ];
  constructor(){
  }

  ngOnInit(){

    //animaciones
   AOS.init();
   window.addEventListener('load',AOS.refresh);
   //carrusel
   this.botonCarusel = document.getElementById('botonCarusel');
   setInterval(() =>{
    this.botonCarusel.click();
   },9000);
   
  }

  

  // seleccionRow(e:any){//Muestra la fila que le des click
  //   console.log(e);
  // }



}
