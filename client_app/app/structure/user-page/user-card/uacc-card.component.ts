import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'uacc-card',
  templateUrl: 'uacc-card.component.html',
  styleUrls: ['uacc-card.component.css']
})

export class UAccCardComponent {
  private suggestToEdit: boolean = false;

  onHover() {
    this.suggestToEdit = true;
  }

  onBlur() {
    this.suggestToEdit = false;
  }

  openEditDialog() {
    console.log('edit');
  }
}
