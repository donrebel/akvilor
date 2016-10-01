"use strict";
var router_1 = require('@angular/router');
var chat_room_1 = require('./chat-room');
var routes = [
    { path: '', redirectTo: 'room/', pathMatch: 'full' },
    { path: 'room/:roomId', component: chat_room_1.ChatRoomComponent },
    { path: 'room/', component: chat_room_1.ChatRoomComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=video-chat.routing.js.map