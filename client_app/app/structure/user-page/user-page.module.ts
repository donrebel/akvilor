import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';
import { UserPageRoutingModule } from './user-page-routing.module';

import { UserPageComponent } from './user-page.component';
// import { UserCardComponent } from './user-card/user-card.component';
import { UAccCardComponent } from './user-card/uacc-card.component';
import { RatePipe } from './user-card/uacc-card.pipes';
import OffClickDirective from './directives/off-click.directive';
import { UserDataService } from './services/user-data.service';

//import { UAccCardEditFormModalComponent } from './user-card/uacc-card-edit-form-modal.component';
import { UAccCardEditFormComponent } from './user-card/uacc-card-edit-form.component';


@NgModule({
    imports: [
      SharedModule,
      ReactiveFormsModule,
      UserPageRoutingModule
    ],
    declarations: [
      UserPageComponent,
      // UserCardComponent,
      OffClickDirective,
      UAccCardComponent,
  //    UAccCardEditFormModalComponent,
      UAccCardEditFormComponent,
      RatePipe
    ]
    // entryComponents: [
    //   UAccCardEditFormModalComponent
    // ],
    // providers: [
    //   UserDataService
    // ]
})
export class UserPageModule {}
