import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { AutenticacaoGuard } from '../guard/autenticacao.guard';
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder) {
        this.formBuilder = formBuilder;
    }
    LoginPage.prototype.ngOnInit = function () {
        this.formulario = this.formBuilder.group({
            email: ['', [Validators.email, Validators.required]],
            senha: ['', [Validators.required, Validators.minLength(6)]]
        });
    };
    LoginPage.prototype.clicou = function () {
        if (this.formulario.valid &&
            this.formulario.get('email').value == "teste@teste.com" &&
            this.formulario.get('senha').value == "123456") {
            AutenticacaoGuard.podeAcessar = true;
        }
        else
            this.msg = "Email ou senha incorreta";
    };
    var _a;
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof FormBuilder !== "undefined" && FormBuilder) === "function" ? _a : Object])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map