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
var angular2_jwt_1 = require('angular2-jwt');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var app_config_1 = require('../../../app-config');
var UserProfileService = (function () {
    function UserProfileService(appConfig, authHttp) {
        this.authHttp = authHttp;
        //this.baseUrl  = '//localhost:3000/api';
        this.baseUrl = appConfig.apiEndpoint;
    }
    UserProfileService.prototype.userProfile_getAll = function () { };
    UserProfileService.prototype.getOne = function (id) {
        return this.authHttp
            .get(this.baseUrl + "/v1/user/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProfileService.prototype.create = function (inputData) {
        var body = JSON.stringify({ data: inputData });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.authHttp
            .post(this.baseUrl + "/v1/user", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProfileService.prototype.update = function (inputData) {
        var body = JSON.stringify({ data: inputData });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.authHttp
            .put(this.baseUrl + "/v1/user/" + inputData._id, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProfileService.prototype.remove = function (id) {
        return this.authHttp
            .delete(this.baseUrl + "/v1/user/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    UserProfileService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        return body || {};
    };
    UserProfileService.prototype.handleError = function (error) {
        // In a real world app, we might send the error to remote logging infrastructure
        var errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    UserProfileService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object, angular2_jwt_1.AuthHttp])
    ], UserProfileService);
    return UserProfileService;
}());
exports.UserProfileService = UserProfileService;
//# sourceMappingURL=user-profile.service.js.map