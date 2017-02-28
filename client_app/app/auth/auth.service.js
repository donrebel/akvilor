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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var router_1 = require('@angular/router');
var app_config_1 = require('../app-config');
// import { UserAccount, UserProfile } from './user-account';
var app_models_1 = require('../app.models');
var util_service_1 = require('../core/services/util.service');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/filter');
var AuthService = (function () {
    function AuthService(http, router, util, appConfig) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.util = util;
        this.lock = new Auth0Lock('dXFukGIX83bwXj2R8yFPsKR3dhecEWZi', 'akvilor.auth0.com');
        //currentUserAccount: UserAccount;
        this.guestAccount = new app_models_1.UserAccount("guest");
        this._currentUserAccount = new Rx_1.BehaviorSubject(this.guestAccount);
        this.apiBaseUrl = appConfig.apiEndpoint;
        this.redirectUrl = localStorage.getItem('redirectUrl');
        // Add callback for lock 'authenticated' event
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            _this.lock.getProfile(authResult.idToken, function (error, profile) {
                if (error) {
                    console.log(error);
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                console.log(JSON.stringify(profile));
                _this.setCurrentUserAccount(profile);
            });
            var redirect = _this.redirectUrl ? _this.redirectUrl : '/home';
            _this.router.navigate([redirect]);
            _this.lock.hide();
        });
        this.setCurrentUserAccount();
    }
    AuthService.prototype.setRedirectUrl = function (url) {
        localStorage.setItem('redirectUrl', url);
    };
    AuthService.prototype.login = function () {
        this.lock.show();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        localStorage.removeItem('redirectUrl');
        this.router.navigate(['/home']);
    };
    AuthService.prototype.authenticated = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.getCurrentUserAccount = function () {
        return this._currentUserAccount.asObservable();
    };
    AuthService.prototype.setCurrentUserAccount = function (profile) {
        var _this = this;
        if (!profile) {
            var profileStr = localStorage.getItem('profile');
            if (profileStr) {
                profile = JSON.parse(profileStr);
            }
        }
        var user_id = profile.identities[0].user_id;
        this.http.get(this.apiBaseUrl + "userAccount/" + user_id)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest)
            .subscribe(function (acc) { _this._currentUserAccount.next(acc); }, function (err) { console.log(err); }, function () { });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(3, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, util_service_1.UtilService, Object])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map