import { Component, Input, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../../auth/auth.service';
import { UserDataService } from '../services/user-data.service';
import { UserAccount } from '../../../app.models';

@Component({
  moduleId: module.id,
  templateUrl: 'uacc-card-edit-form.component.html',
  styleUrls: ['uacc-card-edit-form.component.css']
})

export class UAccCardEditFormComponent implements OnInit {
  private profile: UserAccount;
  accForm: FormGroup;

  constructor(
    private userData: UserDataService,
    private authData: AuthService,
    private fb: FormBuilder,
    public dialogRef: MdDialogRef<UAccCardEditFormComponent>
  ) {
    this.createForm()
  }

  ngOnInit() {
    this.authData.getCurrentUserAccount().subscribe(
      (profile: UserAccount) => {
        this.profile = profile;
        this.refillForm();
      },
      (err) => {
        console.log(err);
      }
    )
  }

  createForm() {
    this.accForm = this.fb.group({
      loginName: '',
      firstName: '',
      lastName: '',
      title: '',
      ratePerMinute: '',
      overview: '',
      skills: ''
    })
  }

  refillForm() {
    this.accForm.reset({
      loginName: this.profile.user_profile.nickname,
      firstName: this.profile.firstName,
      lastName: this.profile.lastName,
      title: this.profile.title,
      ratePerMinute: this.profile.ratePerMinute,
      overview: this.profile.overview,
      skills: this.profile.skills
    });
  }

  onSubmit() {
    this.profile = this.prepareSaveProfile();
    this.authData.updateCurrentUserProfileData(this.profile).subscribe(
      (res) => res,
      (err) => {
        console.log(err)
      }
    );
    this.refillForm();
  }

  prepareSaveProfile(): UserAccount {
    const formModel = this.accForm.value;
    let profile: UserAccount = this.profile;
    profile.user_profile.nickname = formModel.loginName;
    profile.firstName = formModel.firstName;

    profile.lastName = formModel.lastName;
    profile.title = formModel.title;
    profile.ratePerMinute = formModel.ratePerMinute;
    profile.overview = formModel.overview;
    profile.skills = formModel.skills;
    return profile;
  }

  revert() {
    this.refillForm()
  }
}
