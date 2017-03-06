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
var forms_1 = require('@angular/forms');
var UserCardComponent2 = (function () {
    function UserCardComponent2(fb) {
        this.fb = fb;
        this.createForm();
    }
    UserCardComponent2.prototype.createForm = function () {
        this.accForm = this.fb.group({
            loginName: '',
            firstName: '',
            lastName: '',
            headline: '',
            overview: '',
            skills: '',
            ratePerMinute: ''
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserCardComponent2.prototype, "accID", void 0);
    UserCardComponent2 = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'user-card',
            templateUrl: 'user-card.component2.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], UserCardComponent2);
    return UserCardComponent2;
}());
exports.UserCardComponent2 = UserCardComponent2;
//# sourceMappingURL=user-card.component2.js.map