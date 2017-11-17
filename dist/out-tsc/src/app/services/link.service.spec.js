"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var link_service_1 = require("./link.service");
describe('LinkService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [link_service_1.LinkService]
        });
    });
    it('should be created', testing_1.inject([link_service_1.LinkService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=link.service.spec.js.map