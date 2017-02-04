import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { routing, appRoutingProviders } from './app.routing';
import { MainPageComponent } from './main-page.component';
import { UserPageModule } from './user-page/user-page.module';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    CoreModule,
    SharedModule,
    UserPageModule
  ],
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
