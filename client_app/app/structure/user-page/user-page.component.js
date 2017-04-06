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
var auth_service_1 = require('../../auth/auth.service');
var user_data_service_1 = require('./services/user-data.service');
var UserPageComponent = (function () {
    function UserPageComponent(route, router, userData, authData) {
        this.route = route;
        this.router = router;
        this.userData = userData;
        this.authData = authData;
        this.accIsLoading = false;
        this.onEditFlag = false;
    }
    UserPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accIsLoading = true;
        this.route.data.subscribe(function (res) {
            _this.getUserProfileData(res.mode);
        });
    };
    UserPageComponent.prototype.getUserProfileData = function (mode) {
        var _this = this;
        if (mode == 'myPage') {
            this.authData.getCurrentUserProfile().subscribe(function (profile) {
                _this.userProfile = profile;
                _this.accIsLoading = false;
            }, function (err) {
                console.log(err);
                _this.accIsLoading = false;
            });
        }
        else {
            this.route.params
                .switchMap(function (params) {
                return _this.userData.getUserProfileData(params['id']);
            })
                .subscribe(function (profile) {
                _this.userProfile = profile;
                _this.accIsLoading = false;
            }, function (error) {
                console.log(error);
                _this.accIsLoading = false;
            });
        }
    };
    UserPageComponent.prototype.onEdit = function (isEditMode) {
        this.onEditFlag = isEditMode;
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
            styleUrls: ['user-page.component.css'],
            providers: [
                user_data_service_1.UserDataService
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, user_data_service_1.UserDataService, auth_service_1.AuthService])
    ], UserPageComponent);
    return UserPageComponent;
}());
exports.UserPageComponent = UserPageComponent;
//# sourceMappingURL=user-page.component.js.map