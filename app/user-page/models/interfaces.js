"use strict";
var UserInfo = (function () {
    function UserInfo(userName, personName, email, avatarPicture, canvasPicture, synopsis, skilltaglist) {
        this.userName = userName;
        this.personName = personName;
        this.email = email;
        this.avatarPicture = avatarPicture;
        this.canvasPicture = canvasPicture;
        this.synopsis = synopsis;
        this.skilltaglist = skilltaglist;
    }
    return UserInfo;
}());
exports.UserInfo = UserInfo;
//# sourceMappingURL=interfaces.js.map