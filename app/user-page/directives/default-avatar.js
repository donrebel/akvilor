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
var AkvAvatar = (function () {
    function AkvAvatar(el) {
        this.colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
        this._defUserName = 'user';
        this.el = el.nativeElement;
    }
    Object.defineProperty(AkvAvatar.prototype, "userName", {
        set: function (inputValue) {
            var userName = this._defUserName;
            if (inputValue) {
                userName = inputValue;
            }
            var nameSplit = inputValue.split(" ");
            if (nameSplit.length > 0) {
                this.userInitials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
            }
            else {
                this.userInitials = nameSplit[0].charAt(0).toUpperCase();
            }
            var charIndex = this.userInitials.charCodeAt(0) - 65;
            this.colourIndex = charIndex % 19;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], AkvAvatar.prototype, "userName", null);
    AkvAvatar = __decorate([
        core_1.Directive({
            selector: '[akvAvatar]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], AkvAvatar);
    return AkvAvatar;
}());
exports.AkvAvatar = AkvAvatar;
//
// export class AkvAvatar {
//   private _defaultColor = 'red';
//   private btnEditEl: HTMLElement;
//   private el: HTMLElement;
//
//   constructor(el: ElementRef) {
//     this.el = el.nativeElement;
//   }
//
//   @Input() set btnEdit(el: HTMLElement){
//     this.btnEditEl = el;
//     console.log(typeof(el));
//   }
//
//   @Input('akvAvatar') highlightColor: string;
//
//   @HostListener('mouseenter') onMouseEnter() {
//       this.highlight(this.highlightColor || this._defaultColor);
//       this.btnEditEl.style.display = "block";
//   }
//
//   @HostListener('mouseleave') onMouseLeave() {
//     this.highlight(null);
//     this.btnEditEl.style.display = "none";
//   }
//
//   private highlight(color: string) {
//     this.el.style.backgroundColor = color;
//
//   }
// }
//
// //<canvas id="user-icon" width="256" height="256"></canvas>
// /*
//
// var name = "d Crossley",
//     nameSplit = name.split(" "),
//     initials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
//
// var charIndex = initials.charCodeAt(0) - 65,
//     colourIndex = charIndex % 19;
//
// var canvas = document.getElementById("user-icon");
// var context = canvas.getContext("2d");
//
// var canvasWidth = $(canvas).attr("width"),
//     canvasHeight = $(canvas).attr("height"),
//     canvasCssWidth = canvasWidth,
//     canvasCssHeight = canvasHeight;
//
// if (window.devicePixelRatio) {
//     $(canvas).attr("width", canvasWidth * window.devicePixelRatio);
//     $(canvas).attr("height", canvasHeight * window.devicePixelRatio);
//     $(canvas).css("width", canvasCssWidth);
//     $(canvas).css("height", canvasCssHeight);
//     context.scale(window.devicePixelRatio, window.devicePixelRatio);
// }
//
// context.fillStyle = colours[colourIndex];
// context.fillRect (0, 0, canvas.width, canvas.height);
// context.font = "128px Arial";
// context.textAlign = "center";
// context.fillStyle = "#FFF";
// context.fillText(initials, canvasCssWidth / 2, canvasCssHeight / 1.5);
//
//# sourceMappingURL=default-avatar.js.map