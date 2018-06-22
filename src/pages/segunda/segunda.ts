import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { ToastController } from 'ionic-angular';
import { HomePage } from '../home/home'
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { SextaPage } from '../sexta/sexta';


@IonicPage()
@Component({
  selector: 'page-segunda',
  templateUrl: 'segunda.html',
})
export class SegundaPage {


  on: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

      
      
  }

  ingresar(){
    
    let loading = this.loadingCtrl.create({
      
      spinner: 'hide',
      content: `<img src="../../assets/imgs/spinner.gif" />`,
      duration: 3000
    });

    loading.onDidDismiss(() => {
      
  
    this.navCtrl.push(SextaPage, {
     
    })
      
    });

    loading.present();
  


    
  }

  ejecutarAlerta(){
    if(this.on==true){
    let on =  this.on;
    let alert = this.alertCtrl.create({
      title: 'Se recordaran los datos',
      buttons: ['Aceptar']
    })
    alert.present();
  }
  }

  regresar(){
    this.navCtrl.push(HomePage);
  }



  toast3(){
    let toast = this.toastCtrl.create({
      message: 'Para soporte y ayuda ingrese a www.MyPet.cl ',
      duration: 10000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'
      
      });
      toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegundaPage');
  }

}
