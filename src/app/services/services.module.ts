import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoService } from './banco.service';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  
  imports: [
    CommonModule
  ],
  providers:[SQLite],
  declarations: [ ],

})
export class ServicesModule { }
