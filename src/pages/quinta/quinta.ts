import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { TerceraPage } from '../tercera/tercera';

@Component({
  selector: 'page-quinta',
  templateUrl: 'quinta.html'
})
export class QuintaPage {
  cats: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController) {
    this.db = firebase.firestore();
    this.loadData();
  }

  loadData(){
    this.getAllDocuments("cats").then((e)=>{
      this.cats = e;
  });
  }

addMessage2(){
    if(!this.isEditing){
    this.addDocument("cats", this.model).then(()=>{
      this.loadData();
    });
  }else{
    this.updateDocument("cats", this.model.$key, this.model).then(()=>{
      this.loadData();
    });
  }
  this.isEditing = false;
  
  this.model.nombre = '';
  this.model.raza = '';
  this.model.edad = '';
  this.model.contacto = '';
}

updateMessage2(obj){
  this.model = obj;
  this.isEditing = true;
}

deleteMessage2(key){
  this.deleteDocument("cats", key).then(()=>{
    this.loadData();
    this.isEditing = false;
  });
}




getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
        this.db.collection(collection)
            .get()
            .then((querySnapshot) => {
                let arr = [];
                querySnapshot.forEach(function (doc) {
                    var obj = JSON.parse(JSON.stringify(doc.data()));
                    obj.$key = doc.id
                    console.log(obj)
                    arr.push(obj);
                });

                if (arr.length > 0) {
                    console.log("Document data:", arr);
                    resolve(arr);
                } else {
                    console.log("No such document!");
                    resolve(null);
                }


            })
            .catch((error: any) => {
                reject(error);
            });
    });
}

deleteDocument(collectionName: string, docID: string): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .delete()
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

addDocument(collectionName: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db.collection(collectionName).add(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

updateDocument(collectionName: string, docID: string, dataObj: any): Promise<any> {
  return new Promise((resolve, reject) => {
      this.db
          .collection(collectionName)
          .doc(docID)
          .update(dataObj)
          .then((obj: any) => {
              resolve(obj);
          })
          .catch((error: any) => {
              reject(error);
          });
  });
}

toast3(){
    let toast = this.toastCtrl.create({
      message: 'Desliza a la izquierda sobre un registro para editarlo ',
      duration: 10000,
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Aceptar'
      
      });
      toast.present();
  }

  regresar(){
    this.navCtrl.push(TerceraPage);
  }

}
