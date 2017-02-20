import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { FormsModule }   from '@angular/forms';

import { CoreModule } from './core/core.module';
import { StructureModule } from './structure/structure.module';
// import { SharedModule } from './shared/shared.module';
import { APP_CONFIG, AKVILOR_CONFIG } from './app-config';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

// import { UserPageModule } from './page-structure/user-page/user-page.module';
// import { MainPageComponent } from './page-structure/main-page/main-page.component';
import { PageNotFoundComponent } from './structure/page-not-found/page-not-found.component';
// import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    StructureModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent//,
    // ComposeMessageComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AKVILOR_CONFIG }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
