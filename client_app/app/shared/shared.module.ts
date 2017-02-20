import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import { CanDeactivateGuard }  from './guards/can-deactivate-guard.service';
import { Draggable }           from './draggable';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ Draggable ],
  providers:    [ CanDeactivateGuard ],
  exports:      [
    CommonModule,
    FormsModule,
    MaterialModule,
    Draggable
  ]
})
export class SharedModule { }
