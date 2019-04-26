import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoService } from './banco.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { PizzaService } from './pizza.service';

@NgModule({
  
  imports: [
    CommonModule
  ],
  providers:[BancoService,PizzaService, SQLite],
  declarations: [this.sqlite.create({
      name:'pizza.db',
      location: 'default'
  }) ],
  

})
export class ServicesModule { }
