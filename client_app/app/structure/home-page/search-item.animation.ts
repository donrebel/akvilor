import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const flyInOut: AnimationEntryMetadata =
  trigger('flyInOut', [
    state('in',
      style({
        opacity: 1,
        transform: 'scale(1)'
      })
    ),
    transition('void => in', [
      style({
        opacity: 0,
        transform: 'scale(0.9)'
      }),
      animate('0.2s')
    ]),
    transition('in => void', [
      animate('0.2s', style({opacity: 0, transform: 'scale(0.9)'}))
    ])
  ])
