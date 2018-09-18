import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { InserirAlunoPage } from '../pages/inserir-aluno/inserir-aluno'; 
import { TabsPage } from '../pages/tabs/tabs';

import { AngularFireModule } from 'angularfire2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InserirAlunoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialize AngularFire from dashboard
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD4mT_3oP06aV6CaetYMT7Uh0Uz2N9sVJY",
      authDomain: "cepi-cadastro.firebaseapp.com",
      databaseURL: "https://cepi-cadastro.firebaseio.com",
      projectId: "cepi-cadastro",
      storageBucket: "cepi-cadastro.appspot.com",
      messagingSenderId: "544453815871"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    InserirAlunoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
