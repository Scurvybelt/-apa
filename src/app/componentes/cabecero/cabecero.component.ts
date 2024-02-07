import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})

//  nav = document.querySelector("#nav");
//  abrir = document.querySelector("#abrir");
//  cerrar = document.querySelector("#cerrar");

// abrir.addEventListener("click", () => {
//   nav.classList.add("visible");
// })

// cerrar.addEventListener("click",() => {
//   nav.classList.remove("visible");
// })

export class CabeceroComponent {
  
  subMenu: boolean = false;
  public dark = false;
  constructor(){

  }
  ngOnInit(){
    

  }

  mostrarMenu(){
    this.subMenu = !this.subMenu;
    console.log(this.subMenu);
  }

  darkMode(){
    
    // const storedDarkMode = window.document.getElementById('toggle');
    // document.body.classList.toggle('dark-theme');

    this.dark = !this.dark;
    console.log(this.dark);
    if(this.dark){
      //pones en dark mode todo
      document.documentElement.setAttribute('data-theme','dark');
    }else{
      //pones en light mode todo
      document.documentElement.setAttribute('data-theme','light');
      
    }
  }
}


