import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AutenticacaoGuard } from './guard/autenticacao.guard';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AutenticacaoGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
    { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
    { path: '', loadChildren: './home/home.module#HomePageModule' },
    { path: 'pagamento', loadChildren: './pagamento/pagamento.module#PagamentoPageModule' },
    { path: 'bebidas', loadChildren: './bebidas/bebidas.module#BebidasPageModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map