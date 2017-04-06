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
var util_service_1 = require('../../core/services/util.service');
var SearchItemComponent = (function () {
    // nativeWindow: any
    function SearchItemComponent(util) {
        this.util = util;
        this.likeRequest = new core_1.EventEmitter();
        // this.nativeWindow = util.getNativeWindow();
    }
    SearchItemComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.profileLink = "/" + this.data.user_profile_id;
        }
    };
    SearchItemComponent.prototype.like = function () {
        this.likeRequest.emit(this.data);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SearchItemComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SearchItemComponent.prototype, "likeRequest", void 0);
    SearchItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-item',
            templateUrl: './search-item.component.html',
            styleUrls: ['./search-item.component.css']
        }), 
        __metadata('design:paramtypes', [util_service_1.UtilService])
    ], SearchItemComponent);
    return SearchItemComponent;
}());
exports.SearchItemComponent = SearchItemComponent;
//# sourceMappingURL=search-item.component.js.map