import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
//import { TestComponent } from './test.component';

const appRoutes: Routes = [
     { path: '', redirectTo: 'main-page', pathMatch: 'full'},
     { path: 'main-page', component: MainPageComponent },
     { path: 'user-page', loadChildren: 'app/user-page/user-page.module#UserPageModule' }
     //{ path: '**', component: PageNotFoundComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
