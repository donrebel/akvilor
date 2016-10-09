import { Component, OnInit } from '@angular/core';

import './rxjs-operators';

import { AuthService } from './core/services/auth.service';

import { Router,
         NavigationExtras } from '@angular/router';

@Component({
  selector: 'akvilor',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent implements OnInit {

    constructor(
      private auth: AuthService,
      public router: Router
    ) {}

    ngOnInit() {
    }

    login() {
      this.auth.login();
    }
    logout() {
      this.auth.logout();
    }
}
