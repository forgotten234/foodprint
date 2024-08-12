import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipe implements PipeTransform {
  
  transform(list: any, inputValue: string) {
    if (!list || !inputValue) {
      return list = [];
    } else {
      return list.filter(item =>
        item.productTitle.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1);
    }
  }
}
