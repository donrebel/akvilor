import { NgModule } from '@angular/core';
import { AUTH_PROVIDERS } from 'angular2-jwt';

import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

@NgModule({
  providers: [
    AuthGuard,
    AuthService,
    AUTH_PROVIDERS
  ]
})

export class AuthModule {}
