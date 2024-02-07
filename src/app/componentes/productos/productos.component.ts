import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  constructor(){

  }

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
    window.scrollTo(0, 0);
  }

}
