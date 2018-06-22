import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SegundaPage } from '../segunda/segunda';
import { TerceraPage } from '../tercera/tercera';
import { ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nav: any;
  nombre: any;
  apellido: any;
  variable_1: string = "";
  variable_2: string = "";

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
            ) {
              setTimeout(() => {
                this.navCtrl.push(SegundaPage);
              }, 5000);;
  }

  continuar(){
    this.navCtrl.push(SegundaPage);
    
}

  ejecutarMensaje(){
    this.variable_1 = this.nombre;
    this.variable_2 = this.apellido;
  }

  siguientePage(){
    this.navCtrl.push(SegundaPage);
  }

  ejecutarToast(){
    let nombre = this.nombre;
    let apellido = this.apellido;
    let toast = this.toastCtrl.create({
      message: nombre + ' ' + apellido,
      duration: 10000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'
      
      });
      toast.present();
  }
  
}