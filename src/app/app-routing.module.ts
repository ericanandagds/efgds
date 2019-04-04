import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard} from './guard/autenticacao.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },  { path: 'tradicionais', loadChildren: './home/tradicionais/tradicionais.module#TradicionaisPageModule' },
  { path: 'especiais', loadChildren: './home/especiais/especiais.module#EspeciaisPageModule' },
  { path: 'doces', loadChildren: './home/doces/doces.module#DocesPageModule' },

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
