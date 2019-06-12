import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { pizza } from '../../../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private db: firebase.firestore.CollectionReference;
  private userID;
  constructor(){
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.firestore().collection('pizza');
  }
  cadastrar(pizza: pizza) {
    this.db.ref('pizza').once('value').then (snapshot =>{
      snapshot.forEach(pizza=>{
        console.log(pizza.val());
      });
    });
   }
   editar(pizza: pizza) {
    this.db.doc(pizza.id).set(pizza);
  }
  excluir (id: string) {
    this.db.doc(id).delete();
  }
     
  async buscarTodos(): Promise<pizza[]> {
    return this.db.where('pizzaID', '==', this.userID).get().then(snapshot => {
      let pizza = [];
      snapshot.forEach(doc => {
        pizza.push(doc.data());
      })

      return pizza;
    });
  }

}
