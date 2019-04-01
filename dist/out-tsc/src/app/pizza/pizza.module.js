import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PizzaPage } from './pizza.page';
var routes = [
    {
        path: '',
        component: PizzaPage
    }
];
var PizzaPageModule = /** @class */ (function () {
    function PizzaPageModule() {
    }
    PizzaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [PizzaPage]
        })
    ], PizzaPageModule);
    return PizzaPageModule;
}());
export { PizzaPageModule };
//# sourceMappingURL=pizza.module.js.map