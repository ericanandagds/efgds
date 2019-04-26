import { Injectable } from '@angular/core';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  
  protected tabela:string;

  constructor(private sqlite: SQLite) {
    this.createDB();
   }

  private createDB(){
    this.getDB().then((db:SQLiteObject) => {
      //tabela pizza
      db.executeSql("CREATE IF NOT EXISTS pizza(id INTEGER PRIMARY KEY AUTOINCREMENT,sabor TEXT)", 
      []);

      
    });
  } 

  protected getDB(){
    return this.sqlite.create({
      name:'pizza.db',
      location: 'default'
    });
  } 
  
  
    
    
    
    
  } 

