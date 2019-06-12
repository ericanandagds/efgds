import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { pizza } from '../../../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  [x: string]: any;

  private db: firebase.firestore.CollectionReference;
  private userID;
  
  constructor(){
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.firestore().collection('pizza');
  }
  
  cadastrar(pizza: pizza) {
    let doc = this.db.doc();
    pizza.id = doc.id;
    pizza.pizzaID = this.userID;
    let obj = this.castObject(pizza);
    doc.set(obj);
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
