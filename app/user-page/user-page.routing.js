"use strict";
var router_1 = require('@angular/router');
var user_page_component_1 = require('./user-page.component');
var auth_guard_service_1 = require('../core/services/auth.guard.service');
var userPageRoutes = [
    // { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }
    { path: 'user-page/:id', component: user_page_component_1.UserPageComponent, canActivate: [auth_guard_service_1.AuthGuard] },
    { path: 'video-chat', loadChildren: 'app/video-chat/video-chat.module#VideoChatModule' }
];
exports.userPageRouting = router_1.RouterModule.forChild(userPageRoutes);
// export const UserPageRoutes: RouterConfig = [
//   {
//     path: 'user-page/:id',
//     component: UserPageComponent,
//     canActivate: [AuthGuard]
//   }
// ]
//# sourceMappingURL=user-page.routing.js.map