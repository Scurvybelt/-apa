import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-letras-grandes',
  templateUrl: './letras-grandes.component.html',
  styleUrls: ['./letras-grandes.component.css']
})
export class LetrasGrandesComponent {

  ngOnInit(){
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }
}
