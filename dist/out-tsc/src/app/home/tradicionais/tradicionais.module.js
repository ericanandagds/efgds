import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TradicionaisPage } from './tradicionais.page';
var routes = [
    {
        path: '',
        component: TradicionaisPage
    }
];
var TradicionaisPageModule = /** @class */ (function () {
    function TradicionaisPageModule() {
    }
    TradicionaisPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TradicionaisPage]
        })
    ], TradicionaisPageModule);
    return TradicionaisPageModule;
}());
export { TradicionaisPageModule };
//# sourceMappingURL=tradicionais.module.js.map