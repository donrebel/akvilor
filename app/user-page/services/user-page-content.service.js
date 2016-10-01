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
var UserPageContent_1 = require('../models/UserPageContent');
var UserPageContent_2 = require('../models/UserPageContent');
var UserPageContentService = (function () {
    function UserPageContentService() {
    }
    UserPageContentService.prototype.getContent = function () {
        this.userPageContent = new UserPageContent_1.UserPageContent();
        this.userPageContent.posts[0] = new UserPageContent_2.Post('VITAE SED CONDIMENTUM', 'assets/images/p1.jpg', '2016-03-01');
        this.userPageContent.posts[1] = new UserPageContent_2.Post('RUTRUM NEQUE ACCUMSAN', 'assets/images/p2.jpg', '2016-02-01');
        this.userPageContent.posts[2] = new UserPageContent_2.Post('ODIO CONGUE MATTIS', 'assets/images/p3.jpg', '2016-01-01');
        this.userPageContent.posts[3] = new UserPageContent_2.Post('ENIM NISL VEROEROS', 'assets/images/test2.jpg', '2016-05-12');
        this.userPageContent.posts[4] = new UserPageContent_2.Post('ENIM NISL VEROEROS 2', 'assets/images/p4.jpg', '2016-05-12');
        return this.userPageContent;
    };
    UserPageContentService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserPageContentService);
    return UserPageContentService;
}());
exports.UserPageContentService = UserPageContentService;
//# sourceMappingURL=user-page-content.service.js.map