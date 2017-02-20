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
var platform_browser_1 = require('@angular/platform-browser');
// import { FormsModule }   from '@angular/forms';
var core_module_1 = require('./core/core.module');
var structure_module_1 = require('./structure/structure.module');
// import { SharedModule } from './shared/shared.module';
var app_config_1 = require('./app-config');
var app_component_1 = require('./app.component');
var app_routing_module_1 = require('./app-routing.module');
// import { UserPageModule } from './page-structure/user-page/user-page.module';
// import { MainPageComponent } from './page-structure/main-page/main-page.component';
var page_not_found_component_1 = require('./structure/page-not-found/page-not-found.component');
// import { ComposeMessageComponent } from './compose-message.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                core_module_1.CoreModule,
                structure_module_1.StructureModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent //,
            ],
            providers: [
                { provide: app_config_1.APP_CONFIG, useValue: app_config_1.AKVILOR_CONFIG }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map