import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private db: firebase.database.Reference;

  constructor(){
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.database().ref('pizza').child(userID);
  }
  cadastrar(pizza: PizzaService) {
  
  }

  
}
