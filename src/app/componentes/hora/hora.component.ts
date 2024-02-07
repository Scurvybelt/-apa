import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-hora',
  templateUrl: './hora.component.html',
  styleUrls: ['./hora.component.css']
})
export class HoraComponent {
  public hora: any;

  private intervalSubscription: Subscription | undefined;
  constructor(){
    
  }

  ngOnInit(){
    this.actualizarHora();
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.actualizarHora();
    });
  }
  ngOnDestroy() {
    // Asegúrate de desuscribirte para evitar pérdidas de memoria
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }

  private actualizarHora(){
    var time = new Date();
    this.hora = time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', second: '2-digit'});
  }
}
