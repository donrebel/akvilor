import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../../auth/auth.service';
import { UserDataService } from '../services/user-data.service';
import { UserProfile } from '../../../auth/auth.models';

@Component({
  moduleId: module.id,
  selector: 'uacc-card-edit',
  templateUrl: 'uacc-card-edit-form.component.html',
  styleUrls: ['uacc-card-edit-form.component.css']
})

export class UAccCardEditFormComponent implements OnChanges {
  @Input() profile: UserProfile;
  @Output() onEdit = new EventEmitter<boolean>();

  accForm: FormGroup;

  constructor(
    private userData: UserDataService,
    private authData: AuthService,
    private fb: FormBuilder
  ) {
    this.createForm()
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

  ngOnChanges() {
    this.accForm.reset({
      loginName: this.profile.autho_profile.nickname,
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
    this.authData.updateCurrentUserProfile(this.profile).subscribe(
      (res) => res,
      (err) => {
        console.log(err)
      }
    );
    this.ngOnChanges();
    this.closeEditForm();
  }

  closeEditForm() {
    this.onEdit.emit(false);
  }

  prepareSaveProfile(): UserProfile {
    const formModel = this.accForm.value;
    let profile: UserProfile = this.profile;
    profile.autho_profile.nickname = formModel.loginName;
    profile.firstName = formModel.firstName;

    profile.lastName = formModel.lastName;
    profile.title = formModel.title;
    profile.ratePerMinute = formModel.ratePerMinute;
    profile.overview = formModel.overview;
    profile.skills = formModel.skills;
    return profile;
  }

}
