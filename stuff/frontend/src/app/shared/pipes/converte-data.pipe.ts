import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertedata'
})
export class ConverteDataPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let data = value.split('T')[0].split("-");
    let array = [data[2], data[1], data[0]];
    return array.toString().replace(',', '/').replace(',', '/');
  }

}
