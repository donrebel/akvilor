import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import { Draggable }           from './draggable';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ Draggable ],
  exports:      [
    CommonModule,
    FormsModule,
    MaterialModule,
    Draggable
  ]
})
export class SharedModule { }
