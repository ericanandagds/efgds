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
      { path:'', redirectTo:'/home/tradicionais', pathMatch:'full'},
      { path: 'tradicionais', loadChildren: './tradicionais/tradicionais.module#TradicionaisPageModule' },
      { path: 'especiais', loadChildren: './especiais/especiais.module#EspeciaisPageModule' },
      { path: 'doces', loadChildren: './doces/doces.module#DocesPageModule' },
    ]
  }]


@NgModule({
   imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)],
  declarations: [HomePage]
})
export class HomePageModule {}
