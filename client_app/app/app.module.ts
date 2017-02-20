import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { StructureModule } from './structure/structure.module';
import { APP_CONFIG, AKVILOR_CONFIG } from './app-config';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent } from './structure/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    StructureModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  providers: [
    { provide: APP_CONFIG, useValue: AKVILOR_CONFIG }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
