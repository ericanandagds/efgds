import { TestBed } from '@angular/core/testing';
import { PizzaService } from './pizza.service';
describe('PizzaService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PizzaService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=pizza.service.spec.js.map