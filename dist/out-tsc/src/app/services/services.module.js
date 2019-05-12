var _this = this;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BancoService } from './banco.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { PizzaService } from './pizza.service';
var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule
            ],
            providers: [BancoService, PizzaService, SQLite],
            declarations: [this.sqlite.create({
                    name: 'pizza.db',
                    location: 'default'
                })],
        })
    ], ServicesModule);
    return ServicesModule;
}());
export { ServicesModule };
//# sourceMappingURL=services.module.js.map