import { Component, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { UAccCardEditFormComponent } from './uacc-card-edit-form.component';
import { UserAccount } from '../../../app.models';

@Component({
  moduleId: module.id,
  selector: 'uacc-card',
  templateUrl: 'uacc-card.component.html',
  styleUrls: ['uacc-card.component.css']
})

export class UAccCardComponent {
  @Input() profile: UserAccount;

  private suggestToEdit: boolean = false;
  selectedOption: string;

  constructor (public dialog: MdDialog) {

  }

  onHover() {
    this.suggestToEdit = true;
  }

  onBlur() {
    this.suggestToEdit = false;
  }

  openEditDialog() {
    let dialogRef = this.dialog.open(
      UAccCardEditFormComponent
    );
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }
}
