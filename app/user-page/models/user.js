"use strict";
var User = (function () {
    function User(
        /*  public id:string,
          public name:string,
          public isAuthorized:boolean = false,
          public tags:string[],
      */
        userName, hashedPassword, salt, eMail, personName, created) {
        this.userName = userName;
        this.hashedPassword = hashedPassword;
        this.salt = salt;
        this.eMail = eMail;
        this.personName = personName;
        this.created = created;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map