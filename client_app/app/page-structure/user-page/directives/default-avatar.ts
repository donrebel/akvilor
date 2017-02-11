import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[akvAvatar]'
})

export class AkvAvatar {
  private colours = ["#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
  private el: HTMLElement;
  private userInitials: string;
  private colourIndex: number;
  private _defUserName = 'user'

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  @Input() set userName(inputValue: string){
    let userName = this._defUserName;
    if (inputValue) {
      userName = inputValue
    }
    let nameSplit = inputValue.split(" ")
    if (nameSplit.length > 0 ) {
      this.userInitials = nameSplit[0].charAt(0).toUpperCase() + nameSplit[1].charAt(0).toUpperCase();
    } else {
      this.userInitials = nameSplit[0].charAt(0).toUpperCase()
    }
    let charIndex = this.userInitials.charCodeAt(0) - 65;
    this.colourIndex = charIndex % 19;
  }
}
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
