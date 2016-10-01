"use strict";
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.copyObject = function (object) {
        var objectCopy = {};
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                objectCopy[key] = object[key];
            }
        }
        return objectCopy;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=utils.js.map