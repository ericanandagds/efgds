import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard} from './guard/autenticacao.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' , canActivate:[AutenticacaoGuard]},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: '', loadChildren: './home/home.module#HomePageModule'},  { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
  { path: 'bebidas', loadChildren: './bebidas/bebidas.module#BebidasPageModule' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
