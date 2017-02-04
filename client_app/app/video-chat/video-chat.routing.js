"use strict";
var router_1 = require('@angular/router');
var chat_room_component_1 = require('./chat-room/chat-room.component');
var chatRoutes = [
    // { path: '', redirectTo: 'room', pathMatch: 'full' },
    { path: 'room/:roomId', component: chat_room_component_1.ChatRoomComponent },
    { path: 'room', component: chat_room_component_1.ChatRoomComponent }
];
exports.chatRouting = router_1.RouterModule.forChild(chatRoutes);
//# sourceMappingURL=video-chat.routing.js.map