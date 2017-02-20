import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

// import { userPageRouting } from './user-page.routing';

import { UserPageComponent } from './user-page.component';
import { UserCardComponent } from './user-card/user-card.component';
import OffClickDirective from './directives/off-click.directive';
import { UserPageContentService } from './services/user-page-content.service';
import { UserProfileService } from './services/user-profile.service';
import { Utils } from './services/utils';
import { UserPageRoutingModule } from './user-page-routing.module';

@NgModule({
    imports: [
      SharedModule,
      UserPageRoutingModule
    ],
    declarations: [
      UserPageComponent,
      UserCardComponent,
      OffClickDirective
    ],
    providers: [
      UserPageContentService,
      UserProfileService,
      Utils
    ]
})
export class UserPageModule {}
