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
var material_1 = require('@angular/material');
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../../../auth/auth.service');
var user_data_service_1 = require('../services/user-data.service');
var UAccCardEditFormComponent = (function () {
    function UAccCardEditFormComponent(userData, authData, fb, dialogRef) {
        this.userData = userData;
        this.authData = authData;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.createForm();
    }
    UAccCardEditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authData.getCurrentUserAccount().subscribe(function (profile) {
            _this.profile = profile;
            _this.refillForm();
        }, function (err) {
            console.log(err);
        });
    };
    UAccCardEditFormComponent.prototype.createForm = function () {
        this.accForm = this.fb.group({
            loginName: '',
            firstName: '',
            lastName: '',
            title: '',
            ratePerMinute: '',
            overview: '',
            skills: ''
        });
    };
    UAccCardEditFormComponent.prototype.refillForm = function () {
        this.accForm.reset({
            loginName: this.profile.user_profile.nickname,
            firstName: this.profile.firstName,
            lastName: this.profile.lastName,
            title: this.profile.title,
            ratePerMinute: this.profile.ratePerMinute,
            overview: this.profile.overview,
            skills: this.profile.skills
        });
    };
    UAccCardEditFormComponent.prototype.onSubmit = function () {
        this.profile = this.prepareSaveProfile();
        this.authData.updateCurrentUserProfileData(this.profile).subscribe(function (res) { return res; }, function (err) {
            console.log(err);
        });
        this.refillForm();
    };
    UAccCardEditFormComponent.prototype.prepareSaveProfile = function () {
        var formModel = this.accForm.value;
        var profile = this.profile;
        profile.user_profile.nickname = formModel.loginName;
        profile.firstName = formModel.firstName;
        profile.lastName = formModel.lastName;
        profile.title = formModel.title;
        profile.ratePerMinute = formModel.ratePerMinute;
        profile.overview = formModel.overview;
        profile.skills = formModel.skills;
        return profile;
    };
    UAccCardEditFormComponent.prototype.revert = function () {
        this.refillForm();
    };
    UAccCardEditFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'uacc-card-edit-form.component.html',
            styleUrls: ['uacc-card-edit-form.component.css']
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDataService, auth_service_1.AuthService, forms_1.FormBuilder, material_1.MdDialogRef])
    ], UAccCardEditFormComponent);
    return UAccCardEditFormComponent;
}());
exports.UAccCardEditFormComponent = UAccCardEditFormComponent;
//# sourceMappingURL=uacc-card-edit-form.component.js.map