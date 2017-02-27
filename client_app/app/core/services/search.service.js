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
require('rxjs/add/observable/of');
require('rxjs/add/operator/delay');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var app_config_1 = require('../../app-config');
var util_service_1 = require('./util.service');
var SearchItem = (function () {
    function SearchItem(id, name) {
        this.id = id;
        this.name = name;
    }
    return SearchItem;
}());
exports.SearchItem = SearchItem;
var SearchService = (function () {
    function SearchService(appConfig, http, util) {
        this.http = http;
        this.util = util;
        this.apiBaseUrl = appConfig.apiEndpoint;
    }
    SearchService.prototype.search = function (term) {
        return this.http.get(this.apiBaseUrl + "searchItems")
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    SearchService.prototype.searchAddItem = function (item) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiBaseUrl + "searchItems", item, options)
            .map(this.util.extractDataHttpRequest)
            .catch(this.util.handleErrorHttpRequest);
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(app_config_1.APP_CONFIG)), 
        __metadata('design:paramtypes', [Object, http_1.Http, util_service_1.UtilService])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map