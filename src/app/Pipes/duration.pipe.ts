import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
})
export class DurationPipe implements PipeTransform {
  transform(value: number, ...args: any[]) {
    let hr: number = Math.floor(value / 60);
    let min: number = value % 60;
    return hr > 0 ? ` ${hr}h ${min}min` : `${min}min`;
  }
}
