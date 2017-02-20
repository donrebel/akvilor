import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ComposeMessageComponent } from './popup/compose-message.component';

const structureRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
]

@NgModule({
  imports: [
    RouterModule.forChild(structureRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StructureRoutingModule {

}
