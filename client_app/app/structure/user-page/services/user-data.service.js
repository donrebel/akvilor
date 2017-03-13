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
var app_config_1 = require('../../../app-config');
var util_service_1 = require('../../../core/services/util.service');
var UserDataService = (function () {
    function UserDataService(appConfig, authHttp, util) {
        this.authHttp = authHttp;
        this.util = util;
        this.apiBaseUrl = appConfig.apiEndpoint;
        this.apiUrl = this.apiBaseUrl + "userAccount";
    }
    UserDataService.prototype.getOne = function (id) {
        return this.authHttp
            .get(this.apiUrl + "/" + id)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    UserDataService.prototype.getUserProfileData = function (id) {
        return this.authHttp
            .get(this.apiUrl + "/" + id)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    UserDataService.prototype.create = function (accInfo) {
        var body = JSON.stringify({ data: accInfo });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.authHttp
            .post(this.apiUrl, body, options)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    UserDataService.prototype.update = function (accInfo) {
        var body = JSON.stringify({ data: accInfo });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.authHttp
            .put(this.apiUrl + "/" + accInfo.id, body, options)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    UserDataService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object, angular2_jwt_1.AuthHttp, util_service_1.UtilService])
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=user-data.service.js.map