import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DocesPage } from './doces.page';
var routes = [
    {
        path: '',
        component: DocesPage
    }
];
var DocesPageModule = /** @class */ (function () {
    function DocesPageModule() {
    }
    DocesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [DocesPage]
        })
    ], DocesPageModule);
    return DocesPageModule;
}());
export { DocesPageModule };
//# sourceMappingURL=doces.module.js.map