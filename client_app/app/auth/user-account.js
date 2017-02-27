"use strict";
var UserProfile = (function () {
    function UserProfile(user_id, email, picture, name, nickname, last_password_reset, app_metadata, signed_up, email_verified, clientID, updated_at, identities, created_at, global_client_id) {
    }
    return UserProfile;
}());
exports.UserProfile = UserProfile;
var UserAccount = (function () {
    function UserAccount(user_account_id, user_profile_id, accountName, personName, accountEmail, avatarPicture, canvasPicture, synopsis, skilltaglist, ratePerMinute, likes) {
    }
    return UserAccount;
}());
exports.UserAccount = UserAccount;
//# sourceMappingURL=user-account.js.map