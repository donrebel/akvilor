import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
//import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { Draggable }           from './draggable';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ Draggable ],
  exports:      [
    CommonModule,
    FormsModule,
    Draggable
  ]
})
export class SharedModule { }
