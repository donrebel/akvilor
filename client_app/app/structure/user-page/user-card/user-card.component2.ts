import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { UserAccount } from '../../../app.models';

@Component({
  moduleId: module.id,
  selector: 'user-card',
  templateUrl: 'user-card.component2.html'
})

export class UserCardComponent2 {
  @Input() accID: string;
  accForm: FormGroup;

  constructor (
    private fb: FormBuilder
  ) {
    this.createForm()
  }

  createForm() {
    this.accForm = this.fb.group({
      loginName: '',
      firstName: '',
      lastName: '',
      headline: '',
      overview: '',
      skills: '',
      ratePerMinute: ''
    })
  }
}
