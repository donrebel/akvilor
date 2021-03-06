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
var Subject_1 = require('rxjs/Subject');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/switchMap');
var search_service_1 = require('../../core/services/search.service');
var HomePageComponent = (function () {
    function HomePageComponent(searchService) {
        this.searchService = searchService;
        this.items = new Observable_1.Observable();
        this.searchTermStream = new Subject_1.Subject();
    }
    HomePageComponent.prototype.search = function (term) {
        this.searchTermStream.next(term);
    };
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.searchTermStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchService.search(term); });
    };
    HomePageComponent.prototype.like = function (searchItem) {
        console.log(searchItem);
    };
    HomePageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'home-page.component.html',
            styleUrls: ['home-page.component.css']
        }), 
        __metadata('design:paramtypes', [search_service_1.SearchService])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;
//# sourceMappingURL=home-page.component.js.map