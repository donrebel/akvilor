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
var forms_1 = require('@angular/forms');
var auth_service_1 = require('../../../auth/auth.service');
var user_data_service_1 = require('../services/user-data.service');
var auth_models_1 = require('../../../auth/auth.models');
var UAccCardEditFormComponent = (function () {
    function UAccCardEditFormComponent(userData, authData, fb) {
        this.userData = userData;
        this.authData = authData;
        this.fb = fb;
        this.onEdit = new core_1.EventEmitter();
        this.createForm();
    }
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
    UAccCardEditFormComponent.prototype.ngOnChanges = function () {
        this.accForm.reset({
            loginName: this.profile.autho_profile.nickname,
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
        this.authData.updateCurrentUserProfile(this.profile).subscribe(function (res) { return res; }, function (err) {
            console.log(err);
        });
        this.ngOnChanges();
        this.closeEditForm();
    };
    UAccCardEditFormComponent.prototype.closeEditForm = function () {
        this.onEdit.emit(false);
    };
    UAccCardEditFormComponent.prototype.prepareSaveProfile = function () {
        var formModel = this.accForm.value;
        var profile = this.profile;
        profile.autho_profile.nickname = formModel.loginName;
        profile.firstName = formModel.firstName;
        profile.lastName = formModel.lastName;
        profile.title = formModel.title;
        profile.ratePerMinute = formModel.ratePerMinute;
        profile.overview = formModel.overview;
        profile.skills = formModel.skills;
        return profile;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', auth_models_1.UserProfile)
    ], UAccCardEditFormComponent.prototype, "profile", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UAccCardEditFormComponent.prototype, "onEdit", void 0);
    UAccCardEditFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'uacc-card-edit',
            templateUrl: 'uacc-card-edit-form.component.html',
            styleUrls: ['uacc-card-edit-form.component.css']
        }), 
        __metadata('design:paramtypes', [user_data_service_1.UserDataService, auth_service_1.AuthService, forms_1.FormBuilder])
    ], UAccCardEditFormComponent);
    return UAccCardEditFormComponent;
}());
exports.UAccCardEditFormComponent = UAccCardEditFormComponent;
//# sourceMappingURL=uacc-card-edit-form.component.js.map