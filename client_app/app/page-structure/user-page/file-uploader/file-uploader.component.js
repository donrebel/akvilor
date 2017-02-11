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
//import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
// import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
var ng2_file_upload_1 = require('ng2-file-upload');
var uploadURL = 'http://localhost:3000/profile/';
//const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var FileUploaderComponent = (function () {
    function FileUploaderComponent() {
        this.uploader = new ng2_file_upload_1.FileUploader({ url: uploadURL });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    FileUploaderComponent.prototype.ngOnInit = function () {
    };
    FileUploaderComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    FileUploaderComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    FileUploaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-file-uploader',
            templateUrl: 'file-uploader.component.html',
            styleUrls: ['file-uploader.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());
exports.FileUploaderComponent = FileUploaderComponent;
//# sourceMappingURL=file-uploader.component.js.map