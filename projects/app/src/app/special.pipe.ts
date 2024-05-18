import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'special',
  standalone: true,
})
export class SpecialPipe implements PipeTransform {
  transform(value: string, limit?: number): any {
    if (!value) {
      return null;
    } else {
      let limits = limit ? limit : 20;
      return value.substring(0, limits) + '.....';
      // return value.substring(0, 20) + '.....';
    }
  }
}
