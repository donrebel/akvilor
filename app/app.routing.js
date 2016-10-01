"use strict";
var router_1 = require('@angular/router');
var main_page_component_1 = require('./main-page.component');
//import { TestComponent } from './test.component';
var appRoutes = [
    { path: '', redirectTo: 'main-page', pathMatch: 'full' },
    { path: 'main-page', component: main_page_component_1.MainPageComponent },
    { path: 'user-page', loadChildren: 'app/user-page/user-page.module#UserPageModule' }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map