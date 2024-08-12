import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProperty',
  pure: false
})
export class FilterPropertyPipe implements PipeTransform {

  transform(list: any[], filterValues?: any, maxPrice?: number, minPrice?: number, scoreValue?: number) {
    if (scoreValue) {
      if (maxPrice || minPrice) {
        return list.filter((item) => this.isTrue(filterValues, item.eigenschaft) && (item.foodPrintScore >= scoreValue) && this.checkPrice(minPrice, maxPrice, item.productPreis));
      }
      return list.filter((item) => this.isTrue(filterValues, item.eigenschaft) && item.foodPrintScore >= scoreValue);
    }
    if (maxPrice || minPrice) {
      if (scoreValue) {
        return list.filter((item) => this.isTrue(filterValues, item.eigenschaft) && (item.foodPrintScore >= scoreValue) && this.checkPrice(minPrice, maxPrice, item.productPreis));
      }
      return list.filter((item) => this.isTrue(filterValues, item.eigenschaft) && this.checkPrice(minPrice, maxPrice, item.productPreis));
    } else {
      return list.filter((item) => this.isTrue(filterValues, item.eigenschaft));
    }
  }

  public isTrue(arr1: any[], arr2: any[]) {
    return arr1.every(i => arr2.includes(i));
  }

  public checkPrice(min: number, max: number, productPrice: number) {
    if (min && max) {
      return (productPrice >= min && productPrice <= max);
    }
    else if (min) {
      return (productPrice > min);
    }
    else if (max) {
      return (productPrice < max);
    }
  }


}
