import { TestBed, inject } from '@angular/core/testing';
import { AutenticacaoGuard } from './autenticacao.guard';
describe('AutenticacaoGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [AutenticacaoGuard]
        });
    });
    it('should ...', inject([AutenticacaoGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=autenticacao.guard.spec.js.map