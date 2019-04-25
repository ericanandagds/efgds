import { Injectable } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { BancoService } from './banco.service';
import { promise } from 'protractor';
import { SQLite } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class PizzaService extends BancoService {
  protected tabela:string = 'pizza';

  
    
  }

  

