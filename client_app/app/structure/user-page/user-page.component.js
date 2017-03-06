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
require('rxjs/add/operator/switchMap');
var user_page_content_service_1 = require('./services/user-page-content.service');
var UserPageComponent = (function () {
    function UserPageComponent(route, router, contentService) {
        this.route = route;
        this.router = router;
        this.contentService = contentService;
        this.accIsLoading = false;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.userName = params['id'];
            return _this.contentService.getContent();
        })
            .subscribe(function (content) {
            _this.pageContent = content;
        });
    };
    UserPageComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        ;
    };
    UserPageComponent.prototype.goBack = function () {
        window.history.back();
    };
    UserPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user-page',
            templateUrl: 'user-page.component.html',
            styleUrls: ['user-page.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_page_content_service_1.UserPageContentService])
    ], UserPageComponent);
    return UserPageComponent;
}());
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user-page.component.js.map