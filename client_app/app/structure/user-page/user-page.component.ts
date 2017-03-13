import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { AuthService } from '../../auth/auth.service';
import { UserDataService } from './services/user-data.service';
import { UserAccount } from '../../app.models';

@Component({
  moduleId: module.id,
  selector: 'app-user-page',
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.css']
})
export class UserPageComponent implements OnInit {
  public errorMessage:string;
  private sub: any;

  private accIsLoading = false;
  private userProfile: UserAccount;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userData: UserDataService,
    private authData: AuthService
  ) {}

  ngOnInit() {
    this.accIsLoading = true;
    this.route.data.subscribe(
      (res: {mode: string}) => {
        this.getUserProfileData(res.mode);
      }
    )
  }

  getUserProfileData(mode: string) {
    if (mode == 'myPage') {
      this.authData.getCurrentUserAccount().subscribe(
        (profile: UserAccount) => {
          this.userProfile = profile;
          this.accIsLoading = false;
        },
        (err) => {
          console.log(err);
          this.accIsLoading = false;
        }
      )
    } else {
      this.route.params
        .switchMap((params: Params) => {
          return this.userData.getUserProfileData(params['id']);
        })
        .subscribe(
          (content: UserAccount) => {
            this.userProfile = content;
            this.accIsLoading = false;
          },
          (error) => {
            console.log(error);
            this.accIsLoading = false;
          }
        )
    }
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe()
    };
  }

  goBack(){
     window.history.back();
   }
}
