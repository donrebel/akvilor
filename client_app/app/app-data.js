"use strict";
var AppData = (function () {
    function AppData() {
    }
    AppData.prototype.createDb = function () {
        var searchItems = [
            { id: '111', name: 'item1', imgsrc: 'assets/images/p1.jpg' },
            { id: '222', name: 'item2', imgsrc: 'assets/images/p2.jpg' },
            { id: '333', name: 'item3', imgsrc: 'assets/images/p3.jpg' },
            { id: '444', name: 'item4', imgsrc: 'assets/images/p4.jpg' },
            { id: '666', name: 'item6', imgsrc: 'assets/images/test.jpg' },
            { id: '111', name: 'item1', imgsrc: 'assets/images/p1.jpg' },
            { id: '222', name: 'item2', imgsrc: 'assets/images/p2.jpg' },
            { id: '333', name: 'item3', imgsrc: 'assets/images/p3.jpg' },
            { id: '444', name: 'item4', imgsrc: 'assets/images/p4.jpg' },
            { id: '555', name: 'item5', imgsrc: 'assets/images/test2.jpg' },
            { id: '666', name: 'item6', imgsrc: 'assets/images/test.jpg' }
        ];
        var userProfile = [
            {
                id: "57521c76bf3ea47941a13343",
                autho_profile: {
                    email: "max.y.kovalenko@gmail.com",
                    picture: "https://s.gravatar.com/avatar/0a9983b2869cd597962a9c1269518aa5?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
                    name: "max.y.kovalenko@gmail.com",
                    nickname: "max.y.kovalenko",
                    last_password_reset: "2016-12-01T07:42:51.918Z",
                    app_metadata: { "signed_up": true },
                    signed_up: true,
                    email_verified: true,
                    clientID: "dXFukGIX83bwXj2R8yFPsKR3dhecEWZi",
                    updated_at: "2017-02-20T23:27:34.842Z",
                    user_id: "auth0|57521c76bf3ea47941a13343",
                    identities: [{
                            user_id: "57521c76bf3ea47941a13343",
                            provider: "auth0",
                            connection: "Username-Password-Authentication",
                            isSocial: false }],
                    created_at: "2016-06-04T00:10:30.336Z",
                    global_client_id: "nwKPC1ZmIj9UPkTAvbU6rvFs8ial48FU"
                },
                firstName: "Maksym",
                lastName: "Kovalenko",
                title: "Software Engineer",
                localTime: new Date("February 4, 2016 10:13:00"),
                canvasPicture: "assets/images/usercard.jpg",
                overview: "For some people, the accelerated learning process is continuous. But for most, it levels off when they get their first job. If there are no more exams to take, if there's no demand to get out paper and pencil, why read any more books? Of course, you will learn some things through experience. Just getting out there—sometimes doing it wrong and sometimes doing it right—you will learn",
                skills: ["AngularJS", "HTML", "CSS", "ReactJS"],
                ratePerMinute: 7.37,
                likes: 570
            },
            {
                id: "575219c5eddebf241d6126fb",
                autho_profile: {
                    email: "max.cimmerian@gmail.com",
                    picture: "https://s.gravatar.com/avatar/774d996e8aa03c387171d7c9b7baabc4?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
                    name: "max.cimmerian@gmail.com",
                    nickname: "max.cimmerian",
                    last_password_reset: "2016-12-01T07:42:51.918Z",
                    app_metadata: { "signed_up": true },
                    signed_up: true,
                    email_verified: true,
                    clientID: "dXFukGIX83bwXj2R8yFPsKR3dhecEWZi",
                    updated_at: "2017-02-20T23:27:34.842Z",
                    user_id: "auth0|575219c5eddebf241d6126fb",
                    identities: [
                        {
                            user_id: "575219c5eddebf241d6126fb",
                            provider: "auth0",
                            connection: "Username-Password-Authentication",
                            isSocial: false
                        }
                    ],
                    created_at: "2016-06-03T23:59:01.395Z",
                    global_client_id: "nwKPC1ZmIj9UPkTAvbU6rvFs8ial48FU"
                },
                firstName: "Maksym",
                lastName: "Kovalenko 2",
                title: "DWBI Developer",
                localTime: new Date("January 4, 2016 10:13:00"),
                canvasPicture: "assets/images/usercard.jpg",
                overview: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
                skills: ["DWBI", "Database", "SQL", "Machine Learning"],
                ratePerMinute: 5.55,
                likes: 310
            }
        ];
        return { searchItems: searchItems, userProfile: userProfile };
    };
    return AppData;
}());
exports.AppData = AppData;
//# sourceMappingURL=app-data.js.map