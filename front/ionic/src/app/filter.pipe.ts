import { Pipe, PipeTransform } from '@angular/core';
import { RandomUser } from './random-user';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<RandomUser>, gender: string): Array<RandomUser> {
    if ('all' === gender) return value;

    return value.filter(user => user.gender === gender);
  }

}
