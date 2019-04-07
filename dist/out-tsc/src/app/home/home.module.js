import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
var routes = [
    {
        path: 'home',
        component: HomePage,
        children: [
            { path: '', redirectTo: '/home/tradicionais', pathMatch: 'full' },
            { path: 'tradicionais', loadChildren: './tradicionais/tradicionais.module#TradicionaisPageModule' },
            { path: 'especiais', loadChildren: './especiais/especiais.module#EspeciaisPageModule' },
            { path: 'doces', loadChildren: './doces/doces.module#DocesPageModule' },
        ]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HomePage]
        })
    ], HomePageModule);
    return HomePageModule;
}());
export { HomePageModule };
//# sourceMappingURL=home.module.js.map