import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent {
 constructor(){

 }

 ngOnInit():void{
  window.scrollTo(0, 0);
  AOS.init();
  window.addEventListener('load',AOS.refresh);
 }
}

