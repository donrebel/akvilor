"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OffClickDirective = (function () {
    function OffClickDirective() {
    }
    OffClickDirective.prototype.ngOnInit = function () {
        var self = this;
        setTimeout(function () { document.addEventListener('click', self.offClickHandler); }, 0);
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        var self = this;
        document.removeEventListener('click', self.offClickHandler);
    };
    OffClickDirective.prototype.onClick = function ($event) {
        $event.stopPropagation();
    };
    __decorate([
        core_1.Input('offClick'), 
        __metadata('design:type', Object)
    ], OffClickDirective.prototype, "offClickHandler", void 0);
    OffClickDirective = __decorate([
        core_1.Directive({
            selector: '[offClick]',
            //inputs: ['offClick'],
            host: {
                '(click)': 'onClick($event)',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], OffClickDirective);
    return OffClickDirective;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = OffClickDirective;
//# sourceMappingURL=off-click.directive.js.map