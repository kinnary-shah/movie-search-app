import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs/operators';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(value: any, maxLength: any): any {
    maxLength = 30;
    return (value.length > maxLength) ? `${value.substring(0,maxLength)}...`: value;
  }

}
