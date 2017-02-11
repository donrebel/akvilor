import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { AuthGuard } from '../../auth/auth-guard.service';

const userPageRoutes: Routes = [
  { path: 'user-page/:id', component: UserPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(userPageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserPageRoutingModule {}
