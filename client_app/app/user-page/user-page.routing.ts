import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { AuthGuard } from '../core/services/auth.guard.service';


const userPageRoutes: Routes = [
  // { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }
  { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }
  // { path: 'video-chat', loadChildren: 'app/video-chat/video-chat.module#VideoChatModule'}
];

export const userPageRouting: ModuleWithProviders = RouterModule.forChild(userPageRoutes);

// export const UserPageRoutes: RouterConfig = [
//   {
//     path: 'user-page/:id',
//     component: UserPageComponent,
//     canActivate: [AuthGuard]
//   }
// ]
