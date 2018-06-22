import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import * as firebase from 'firebase';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SegundaPage } from '../pages/segunda/segunda';
import { TerceraPage } from '../pages/tercera/tercera';
import { CuartaPage } from '../pages/cuarta/cuarta';
import { QuintaPage } from '../pages/quinta/quinta';
import { SextaPage } from '../pages/sexta/sexta';



const config = {
  apiKey: "AIzaSyDs0baHz_EJNYDAR4IE_0jRSgo8UEV8kCQ",
  authDomain: "epe2-8277c.firebaseapp.com",
  databaseURL: "https://epe2-8277c.firebaseio.com",
  projectId: "epe2-8277c",
  storageBucket: "epe2-8277c.appspot.com",
  messagingSenderId: "647327159387"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SegundaPage,
    TerceraPage,
    CuartaPage,
    QuintaPage,
    SextaPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SegundaPage,
    TerceraPage,
    CuartaPage,
    QuintaPage,
    SextaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    
  ]
})
export class AppModule {}
