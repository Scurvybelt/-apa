import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent {
  constructor(){

  }
  ngOnInit(){
    window.scrollTo(0,0);
    AOS.init();
    window.addEventListener('load',AOS.refresh);
  }
}
