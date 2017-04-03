import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { MaterialModule }      from '@angular/material';

import { Draggable }           from './draggable';
import { RatePipe, CurrencyPipe, SkillsPipe } from './pipes';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [
    Draggable,
    RatePipe,
    CurrencyPipe,
    SkillsPipe
  ],
  exports:      [
    CommonModule,
    FormsModule,
    MaterialModule,
    Draggable,
    RatePipe,
    CurrencyPipe,
    SkillsPipe
  ]
})
export class SharedModule { }
