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
var uacc_card_edit_form_component_1 = require('./uacc-card-edit-form.component');
var app_models_1 = require('../../../app.models');
var UAccCardComponent = (function () {
    function UAccCardComponent(dialog) {
        this.dialog = dialog;
        this.suggestToEdit = false;
    }
    UAccCardComponent.prototype.onHover = function () {
        this.suggestToEdit = true;
    };
    UAccCardComponent.prototype.onBlur = function () {
        this.suggestToEdit = false;
    };
    UAccCardComponent.prototype.openEditDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(uacc_card_edit_form_component_1.UAccCardEditFormComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            _this.selectedOption = result;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_models_1.UserAccount)
    ], UAccCardComponent.prototype, "profile", void 0);
    UAccCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'uacc-card',
            templateUrl: 'uacc-card.component.html',
            styleUrls: ['uacc-card.component.css']
        }), 
        __metadata('design:paramtypes', [material_1.MdDialog])
    ], UAccCardComponent);
    return UAccCardComponent;
}());
exports.UAccCardComponent = UAccCardComponent;
//# sourceMappingURL=uacc-card.component.js.map