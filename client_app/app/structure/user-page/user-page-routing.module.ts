import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserPageComponent } from './user-page.component';
import { AuthGuard } from '../../auth/auth-guard.service';

const userPageRoutes: Routes = [
  {
    path: 'u',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data: {
      mode: 'myPage'
    }
  },
  {
    path: ':id',
    component: UserPageComponent,
    canActivate: [AuthGuard],
    data : {
      mode: 'otherUserPage'
    }
  }
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
