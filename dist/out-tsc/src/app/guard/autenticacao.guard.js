import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var AutenticacaoGuard = /** @class */ (function () {
    function AutenticacaoGuard() {
    }
    AutenticacaoGuard_1 = AutenticacaoGuard;
    AutenticacaoGuard.prototype.canActivate = function (next, state) {
        return AutenticacaoGuard_1.podeAcessar;
    };
    var AutenticacaoGuard_1;
    AutenticacaoGuard.podeAcessar = false;
    AutenticacaoGuard = AutenticacaoGuard_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        })
    ], AutenticacaoGuard);
    return AutenticacaoGuard;
}());
export { AutenticacaoGuard };
//# sourceMappingURL=autenticacao.guard.js.map