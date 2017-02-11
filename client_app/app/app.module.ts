import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { UserPageModule } from './page-structure/user-page/user-page.module';
import { MainPageComponent } from './page-structure/main-page/main-page.component';
import { PageNotFoundComponent } from './page-structure/page-not-found/page-not-found.component';

import { ComposeMessageComponent } from './compose-message.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    UserPageModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    PageNotFoundComponent,

    ComposeMessageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
