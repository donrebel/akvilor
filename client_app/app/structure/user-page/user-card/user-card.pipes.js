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
var RatePipe = (function () {
    function RatePipe() {
    }
    RatePipe.prototype.transform = function (value, unitTime) {
        var res = '$ ' + String(value) + ' /';
        if (unitTime === 'minute') {
            res = res + 'min';
        }
        return res;
    };
    RatePipe = __decorate([
        core_1.Pipe({
            name: 'rate'
        }), 
        __metadata('design:paramtypes', [])
    ], RatePipe);
    return RatePipe;
}());
exports.RatePipe = RatePipe;
//# sourceMappingURL=user-card.pipes.js.map