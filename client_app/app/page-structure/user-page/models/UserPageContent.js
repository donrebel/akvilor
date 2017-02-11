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
    function Post(id, title, titleImageSrc, dateCreated) {
        this.id = id;
        this.title = title;
        this.titleImageSrc = titleImageSrc;
        this.dateCreated = dateCreated;
    }
    return Post;
}());
exports.Post = Post;
//# sourceMappingURL=UserPageContent.js.map