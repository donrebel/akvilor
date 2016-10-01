import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard.service';

@NgModule({
    imports: [
      CommonModule,
      HttpModule
    ],
    declarations: [ ],
    providers: [
      AuthService,
      AuthGuard,
      AUTH_PROVIDERS
    ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
