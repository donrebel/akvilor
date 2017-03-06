import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { UserPageRoutingModule } from './user-page-routing.module';

import { UserPageComponent } from './user-page.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserCardComponent2 } from './user-card/user-card.component2';
import { UAccCardComponent } from './user-card/uacc-card.component';

import OffClickDirective from './directives/off-click.directive';
import { UserPageContentService } from './services/user-page-content.service';

import { Utils } from './services/utils';

@NgModule({
    imports: [
      SharedModule,
      ReactiveFormsModule,
      UserPageRoutingModule
    ],
    declarations: [
      UserPageComponent,
      UserCardComponent,
      OffClickDirective,
      UserCardComponent2,
      UAccCardComponent
    ],
    providers: [
      UserPageContentService,
      Utils
    ]
})
export class UserPageModule {}
