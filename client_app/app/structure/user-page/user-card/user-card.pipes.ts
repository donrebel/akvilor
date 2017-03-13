import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {
  transform(value: number, unitTime: string): string {
    let res: string = '$ ' + String(value) + ' /';
      if (unitTime === 'minute') {
        res = res + 'min'
      }
    return res
  }
}
