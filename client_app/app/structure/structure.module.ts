import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { UserPageModule } from './user-page/user-page.module';
import { StructureRoutingModule } from './structure-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchItemComponent } from './home-page/search-item.component';
import { ComposeMessageComponent } from './popup/compose-message.component';

@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    UserPageModule,
    StructureRoutingModule
  ],
  declarations: [
    HomePageComponent,
    ComposeMessageComponent,
    SearchItemComponent
  ]
})
export class StructureModule {

}
