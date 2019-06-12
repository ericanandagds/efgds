import { Component } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';
import{AutenticacaoGuard} from './guard/autenticacao.guard';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router:Router
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
  // Your web app's Firebase configuration
    var Config = {
      apiKey: "AIzaSyCZTTWlevEOfsOsMRVg4c3CmOs23YQ6mh0",
      authDomain: "efgds-751ef.firebaseapp.com",
      databaseURL: "https://efgds-751ef.firebaseio.com",
      projectId: "efgds-751ef",
      storageBucket: "efgds-751ef.appspot.com",
      messagingSenderId: "583502114647",
      appId: "1:583502114647:web:1af28b9b637de8b7"
      };
  // Initialize Firebase
      firebase.initializeApp(Config);

   
  }
  sair(){
    firebase.auth().signOut();
    this.router.navigateByUrl('/login');
  }

}  