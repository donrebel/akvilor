import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {
  transform(value: number, unitTime: string): string {
    let res: string = '$' + String(value) + '/';
      if (unitTime === 'minute') {
        res = res + 'min'
      }
    return res
  }
}

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    let res: string = '$' + String(value)
    return res
  }
}

@Pipe({
  name: 'skills'
})
export class SkillsPipe implements PipeTransform {
  transform(value: string): string {
    let res = '#' + value.toString().split(',').join(',  #')
    return res
  }
}
