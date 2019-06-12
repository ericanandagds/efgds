import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private db: firebase.database.Reference;
  private userID;

  constructor(){
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.firestore().collection('pizza');
  }
  cadastrar(pizza: PizzaService) {
    let db = firebase.database();
    db.ref('pizza').once('value').then (snapshot =>{
      snapshot.forEach(pizza=>{
        console.log(pizza.val());
      });
    });
   }

  
}
