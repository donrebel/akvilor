import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

export const flyInOut: AnimationEntryMetadata =
  trigger('flyInOut', [
    state('*',
    // state('*',
      style({
        transform: 'translateX(0)',
        opacity: 1
        // height: '*'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.2s ease-in')
    ])
    // transition('* => void', [
    //   animate(400, style({transform: 'translateY(100%)'}))
    // ])
  ])

  // trigger('routeAnimation', [
  //   state('*',
  //     style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })
  //   ),
  //   transition(':enter', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100%)'
  //     }),
  //     animate('0.2s ease-in')
  //   ]),
  //   transition(':leave', [
  //     animate('0.5s ease-out', style({
  //       opacity: 0,
  //       transform: 'translateY(100%)'
  //     }))
  //   ])
  // ]);
