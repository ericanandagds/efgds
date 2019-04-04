import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path : 'home',
    component : HomePage,
    children:[
      {path:'', redirectTo:'/Home', pathMatch:'full'},
      { path: 'tradicionais', loadChildren: './home/tradicionais/tradicionais.module#TradicionaisPageModule' },
      { path: 'especiais', loadChildren: './home/especiais/especiais.module#EspeciaisPageModule' },
      { path: 'doces', loadChildren: './home/doces/doces.module#DocesPageModule' },
    ]
  }


]










@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
