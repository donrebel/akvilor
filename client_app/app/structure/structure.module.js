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
var material_1 = require('@angular/material');
var shared_module_1 = require('../shared/shared.module');
var user_page_module_1 = require('./user-page/user-page.module');
var structure_routing_module_1 = require('./structure-routing.module');
var home_page_component_1 = require('./home-page/home-page.component');
var search_item_component_1 = require('./home-page/search-item.component');
var compose_message_component_1 = require('./popup/compose-message.component');
var StructureModule = (function () {
    function StructureModule() {
    }
    StructureModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                material_1.MaterialModule,
                structure_routing_module_1.StructureRoutingModule,
                user_page_module_1.UserPageModule,
            ],
            declarations: [
                home_page_component_1.HomePageComponent,
                compose_message_component_1.ComposeMessageComponent,
                search_item_component_1.SearchItemComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], StructureModule);
    return StructureModule;
}());
exports.StructureModule = StructureModule;
//# sourceMappingURL=structure.module.js.map