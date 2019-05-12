import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
var PizzaService = /** @class */ (function (_super) {
    tslib_1.__extends(PizzaService, _super);
    function PizzaService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tabela = 'pizza';
        return _this;
    }
    PizzaService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], PizzaService);
    return PizzaService;
}(BancoService));
export { PizzaService };
//# sourceMappingURL=pizza.service.js.map