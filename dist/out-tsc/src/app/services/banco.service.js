import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SQLite } from '@ionic-native/sqlite/ngx';
var BancoService = /** @class */ (function () {
    function BancoService(sqlite) {
        this.sqlite = sqlite;
        this.createDB();
    }
    BancoService.prototype.createDB = function () {
        this.getDB().then(function (db) {
            //tabela pizza
            db.executeSql("CREATE IF NOT EXISTS pizza(id INTEGER PRIMARY KEY AUTOINCREMENT,sabor TEXT)", []);
        });
    };
    BancoService.prototype.getDB = function () {
        return this.sqlite.create({
            name: 'pizza.db',
            location: 'default'
        });
    };
    BancoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [SQLite])
    ], BancoService);
    return BancoService;
}());
export { BancoService };
//# sourceMappingURL=banco.service.js.map