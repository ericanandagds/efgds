import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BebidasPage } from './bebidas.page';
var routes = [
    {
        path: '',
        component: BebidasPage
    }
];
var BebidasPageModule = /** @class */ (function () {
    function BebidasPageModule() {
    }
    BebidasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BebidasPage]
        })
    ], BebidasPageModule);
    return BebidasPageModule;
}());
export { BebidasPageModule };
//# sourceMappingURL=bebidas.module.js.map