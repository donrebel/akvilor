import { Injectable } from '@angular/core';

@Injectable()
export class VideoStreamService {
  private stream: any;

  constructor(private q: any) {

  }

  get () {
    if (this.stream) {
      return this.q.when(this.stream)
    } else {
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
  }
}
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
