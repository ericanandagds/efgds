import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PagamentoPage } from './pagamento.page';
var routes = [
    {
        path: '',
        component: PagamentoPage
    }
];
var PagamentoPageModule = /** @class */ (function () {
    function PagamentoPageModule() {
    }
    PagamentoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PagamentoPage]
        })
    ], PagamentoPageModule);
    return PagamentoPageModule;
}());
export { PagamentoPageModule };
//# sourceMappingURL=pagamento.module.js.map