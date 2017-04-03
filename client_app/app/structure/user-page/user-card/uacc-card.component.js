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
var app_models_1 = require('../../../app.models');
var UAccCardComponent = (function () {
    //selectedOption: string;
    function UAccCardComponent() {
        this.onEdit = new core_1.EventEmitter();
        this.suggestToEdit = false;
    }
    UAccCardComponent.prototype.onHover = function () {
        this.suggestToEdit = true;
    };
    UAccCardComponent.prototype.onBlur = function () {
        this.suggestToEdit = false;
    };
    UAccCardComponent.prototype.openEditForm = function () {
        this.onEdit.emit(true);
        // let dialogRef = this.dialog.open(
        //   UAccCardEditFormModalComponent
        // );
        // dialogRef.afterClosed().subscribe(result => {
        //   this.selectedOption = result;
        // });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', app_models_1.UserProfile)
    ], UAccCardComponent.prototype, "profile", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], UAccCardComponent.prototype, "onEdit", void 0);
    UAccCardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'uacc-card',
            templateUrl: 'uacc-card.component.html',
            styleUrls: ['uacc-card.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], UAccCardComponent);
    return UAccCardComponent;
}());
exports.UAccCardComponent = UAccCardComponent;
//# sourceMappingURL=uacc-card.component.js.map