import { Component, EventEmitter, Input, Output } from '@angular/core';

import { UAccCardEditFormModalComponent } from './uacc-card-edit-form-modal.component';
import { UserProfile } from '../../../auth/auth.models';

@Component({
  moduleId: module.id,
  selector: 'uacc-card',
  templateUrl: 'uacc-card.component.html',
  styleUrls: ['uacc-card.component.css']
})

export class UAccCardComponent {
  @Input() profile: UserProfile;
  @Output() onEdit = new EventEmitter<boolean>();

  private suggestToEdit: boolean = false;
  //selectedOption: string;

  constructor () {

  }

  onHover() {
    this.suggestToEdit = true;
  }

  onBlur() {
    this.suggestToEdit = false;
  }

  openEditForm() {
    this.onEdit.emit(true);
    // let dialogRef = this.dialog.open(
    //   UAccCardEditFormModalComponent
    // );
    // dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }
}
