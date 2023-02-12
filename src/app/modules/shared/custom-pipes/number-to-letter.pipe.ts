import { Pipe, PipeTransform } from '@angular/core';
import { PersianNumberService } from '../../../services/common/persian-number.service';

@Pipe({
  name: 'numberToLetter'
})
export class NumberToLetterPipe implements PipeTransform {

  constructor(private persianNumberService:PersianNumberService){}

  transform(inputValue: string): unknown {
    try {
      var number = this.persianNumberService.toEngNumber(inputValue);
      return this.persianNumberService.toPersianWord(inputValue);
  }
  catch(e){
      return `${inputValue} is not valid number!`;
  }
  }

}
