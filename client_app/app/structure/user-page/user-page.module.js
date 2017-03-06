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
var shared_module_1 = require('../../shared/shared.module');
var user_page_routing_module_1 = require('./user-page-routing.module');
var user_page_component_1 = require('./user-page.component');
var user_card_component_1 = require('./user-card/user-card.component');
var user_card_component2_1 = require('./user-card/user-card.component2');
var uacc_card_component_1 = require('./user-card/uacc-card.component');
var off_click_directive_1 = require('./directives/off-click.directive');
var user_page_content_service_1 = require('./services/user-page-content.service');
var utils_1 = require('./services/utils');
var UserPageModule = (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                forms_1.ReactiveFormsModule,
                user_page_routing_module_1.UserPageRoutingModule
            ],
            declarations: [
                user_page_component_1.UserPageComponent,
                user_card_component_1.UserCardComponent,
                off_click_directive_1.default,
                user_card_component2_1.UserCardComponent2,
                uacc_card_component_1.UAccCardComponent
            ],
            providers: [
                user_page_content_service_1.UserPageContentService,
                utils_1.Utils
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], UserPageModule);
    return UserPageModule;
}());
exports.UserPageModule = UserPageModule;
//# sourceMappingURL=user-page.module.js.map