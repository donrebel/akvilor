import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { StructureRoutingModule } from './structure-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { ComposeMessageComponent } from './popup/compose-message.component';


@NgModule({
  imports: [
    SharedModule,
    MaterialModule,
    StructureRoutingModule
  ],
  declarations: [
    HomePageComponent,
    ComposeMessageComponent
  ]
})
export class StructureModule {

}
