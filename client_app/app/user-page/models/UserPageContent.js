"use strict";
var UserPageContent = (function () {
    function UserPageContent() {
        this.posts = [];
    }
    return UserPageContent;
}());
exports.UserPageContent = UserPageContent;
;
var Post = (function () {
    function Post(title, titleImageSrc, dateCreated) {
        this.title = title;
        this.titleImageSrc = titleImageSrc;
        this.dateCreated = dateCreated;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=UserPageContent.js.map