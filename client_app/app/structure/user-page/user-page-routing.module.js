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
var router_1 = require('@angular/router');
var user_page_component_1 = require('./user-page.component');
var auth_guard_service_1 = require('../../auth/auth-guard.service');
var userPageRoutes = [
    { path: 'user-page/:id', component: user_page_component_1.UserPageComponent, canActivate: [auth_guard_service_1.AuthGuard] }
];
var UserPageRoutingModule = (function () {
    function UserPageRoutingModule() {
    }
    UserPageRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forChild(userPageRoutes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserPageRoutingModule);
    return UserPageRoutingModule;
}());
exports.UserPageRoutingModule = UserPageRoutingModule;
//# sourceMappingURL=user-page-routing.module.js.map