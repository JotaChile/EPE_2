import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TerceraPage } from '../tercera/tercera';
import { SegundaPage } from '../segunda/segunda';


@IonicPage()
@Component({
  selector: 'page-sexta',
  templateUrl: 'sexta.html',
})
export class SextaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  adopcion(){
    this.navCtrl.push(TerceraPage);
  }

  cerrar(){
    this.navCtrl.push(SegundaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SextaPage');
  }

}
