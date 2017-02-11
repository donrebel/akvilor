import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './page-structure/main-page/main-page.component';
import { PageNotFoundComponent } from './page-structure/page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message.component';

const appRoutes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  { path: 'main-page', component: MainPageComponent },
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}


// { path: 'user-page', loadChildren: 'app/page-structure/user-page/user-page.module#UserPageModule' },
