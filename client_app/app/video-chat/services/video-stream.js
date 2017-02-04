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
var VideoStreamService = (function () {
    function VideoStreamService(q) {
        this.q = q;
    }
    VideoStreamService.prototype.get = function () {
        if (this.stream) {
            return this.q.when(this.stream);
        }
        else {
            var d = this.q.defer();
            navigator.getUserMedia({
                video: true,
                audio: true
            }, function (s) {
                this.stream = s;
                d.resolve(this.stream);
            }, function (e) {
                d.reject(e);
            });
            return d.promise;
        }
    };
    VideoStreamService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object])
    ], VideoStreamService);
    return VideoStreamService;
}());
exports.VideoStreamService = VideoStreamService;
/*
factory('VideoStream', function ($q) {
    var stream;
    return {
      get: function () {
        if (stream) {
          return $q.when(stream);
        } else {
          var d = $q.defer();
          navigator.getUserMedia({
            video: true,
            audio: true
          }, function (s) {
            stream = s;
            d.resolve(stream);
          }, function (e) {
            d.reject(e);
          });
          return d.promise;
        }
      }
    }
  }*/
//# sourceMappingURL=video-stream.js.map