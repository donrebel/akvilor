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
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/filter');
var app_config_1 = require('../app-config');
var app_models_1 = require('../app.models');
var util_service_1 = require('../core/services/util.service');
var AuthService = (function () {
    function AuthService(http, router, util, appConfig) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.util = util;
        this.lock = new Auth0Lock('dXFukGIX83bwXj2R8yFPsKR3dhecEWZi', 'akvilor.auth0.com', {
            auth: {
                redirectUrl: location.origin,
                responseType: 'token',
                redirect: false,
            }
        });
        this.guestProfile = new app_models_1.UserProfile("guest");
        this.$currentUserProfile = new Rx_1.BehaviorSubject(this.guestProfile);
        this.apiBaseUrl = appConfig.apiEndpoint;
        this.lock.on("authenticated", function (authResult) {
            localStorage.setItem('id_token', authResult.idToken);
            _this.getCurrentUserProfileFromDB();
            _this.router.navigateByUrl(authResult.state);
            _this.lock.hide();
        });
    }
    AuthService.prototype.login = function () {
        this.lock.show({
            auth: {
                params: {
                    state: this.router.url
                }
            }
        });
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('id_token');
        this.router.navigate(['/home']);
    };
    AuthService.prototype.authenticated = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    AuthService.prototype.updateCurrentUserProfile = function (profileData) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this.apiBaseUrl + "userProfile/" + this.currentUserID, profileData, options)
            .map(function (response) {
            var res = _this.util.extractDataHttpRequest(response);
            if (response.ok) {
                _this.$currentUserProfile.next(profileData);
            }
            return res;
        })
            .catch(this.util.handleErrorHttpRequest);
    };
    AuthService.prototype.getCurrentUserProfile = function () {
        return this.$currentUserProfile.asObservable();
    };
    AuthService.prototype.getCurrentUserProfileFromDB = function () {
        var _this = this;
        if (!localStorage.getItem('id_token') == false) {
            var idToken = localStorage.getItem('id_token');
            this.lock.getProfile(idToken, function (error, authOProfile) {
                if (error) {
                    console.log(error);
                }
                _this.currentUserID = authOProfile.identities[0].user_id;
                _this.http
                    .get(_this.apiBaseUrl + "userProfile/" + _this.currentUserID)
                    .map(_this.util.extractDataHttpRequest)
                    .catch(_this.util.handleErrorHttpRequest)
                    .subscribe(function (acc) { _this.$currentUserProfile.next(acc); }, function (err) { console.log(err); }, function () { });
            });
        }
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __param(3, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, util_service_1.UtilService, Object])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
// var obj = {x: 1};
// var source = Rx.Observable.ofObjectChanges(obj);
//
// var subscription = source.subscribe(
//   function (x) {
//     console.log('Next: %s', x);
//   },
//   function (err) {
//     console.log('Error: %s', err);
//   },
//   function () {
//     console.log('Completed');
//   });
//
// obj.x = 42;
//# sourceMappingURL=auth.service.js.map