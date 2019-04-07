import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EspeciaisPage } from './especiais.page';
var routes = [
    {
        path: '',
        component: EspeciaisPage
    }
];
var EspeciaisPageModule = /** @class */ (function () {
    function EspeciaisPageModule() {
    }
    EspeciaisPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EspeciaisPage]
        })
    ], EspeciaisPageModule);
    return EspeciaisPageModule;
}());
export { EspeciaisPageModule };
//# sourceMappingURL=especiais.module.js.map