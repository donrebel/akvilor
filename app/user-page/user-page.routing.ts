import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { AuthGuard } from '../core/services/auth.guard.service';


const routes: Routes = [
  // { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }
  { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }

];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

// export const UserPageRoutes: RouterConfig = [
//   {
//     path: 'user-page/:id',
//     component: UserPageComponent,
//     canActivate: [AuthGuard]
//   }
// ]
