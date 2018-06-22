import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';
import 'firebase/firestore';
import { CuartaPage } from '../cuarta/cuarta';
import { QuintaPage } from '../quinta/quinta';
import { SextaPage } from '../sexta/sexta';

@Component({
  selector: 'page-tercera',
  templateUrl: 'tercera.html'
})
export class TerceraPage {
  messages: any;
  cats: any;
  private db: any;
  model: any = {};
  isEditing: boolean = false;

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    this.db = firebase.firestore();
    this.loadData();
    this.loadData2();
  }

  loadData(){
    this.getAllDocuments("messages").then((e)=>{
      this.messages = e;
  });
  }

  loadData2(){
    this.getAllDocuments("cats").then((e)=>{
      this.cats = e;
  });
  }

addMessage(){
    if(!this.isEditing){
    this.addDocument("messages", this.model).then(()=>{
      this.loadData();
    });
  }else{
    this.updateDocument("messages", this.model.$key, this.model).then(()=>{
      this.loadData();
    });
  }
  this.isEditing = false;
  
  this.model.nombre = '';
  this.model.raza = '';
  this.model.edad = '';
}

updateMessage(obj){
  this.model = obj;
  this.isEditing = true;
}

deleteMessage(key){
  this.deleteDocument("messages", key).then(()=>{
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

perros(){
    
  let loading = this.loadingCtrl.create({
    
    spinner: 'hide',
    content: `<img src="../../assets/imgs/spinner.gif" />`,
    duration: 3000
  });

  loading.onDidDismiss(() => {
    

  this.navCtrl.push(CuartaPage, {

  })
    
  });

  loading.present();



  
}

regresar(){
  this.navCtrl.push(SextaPage);
}

gatos(){
    
  let loading = this.loadingCtrl.create({
    
    spinner: 'hide',
    content: `<img src="../../assets/imgs/spinner.gif" />`,
    duration: 3000
  });

  loading.onDidDismiss(() => {
    

  this.navCtrl.push(QuintaPage, {

  })
    
  });

  loading.present();



  
}

addMessage2(){
  if(!this.isEditing){
  this.addDocument2("cats", this.model).then(()=>{
    this.loadData2();
  });
}else{
  this.updateDocument2("cats", this.model.$key, this.model).then(()=>{
    this.loadData2();
  });
}
this.isEditing = false;

this.model.nombre = '';
this.model.raza = '';
this.model.edad = '';
}

updateMessage2(obj){
this.model = obj;
this.isEditing = true;
}

deleteMessage2(key){
this.deleteDocument2("cats", key).then(()=>{
  this.loadData2();
  this.isEditing = false;
});
}


getAllDocuments2(collection: string): Promise<any> {
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

deleteDocument2(collectionName: string, docID: string): Promise<any> {
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

addDocument2(collectionName: string, dataObj: any): Promise<any> {
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

updateDocument2(collectionName: string, docID: string, dataObj: any): Promise<any> {
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




}