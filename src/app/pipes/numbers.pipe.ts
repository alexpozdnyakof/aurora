import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {return 'N/A'; }
    if ( typeof value === 'string' ) {
      // console.log(value);
      // console.log(typeof value);
      let valueFiltered: any = value.replace(/[^\d.-]/g, '');
      const specialChar: string =  value.includes('%') ? '%' : '';
      valueFiltered = valueFiltered *  1;
      valueFiltered = Math.round(valueFiltered);
      // console.log(`valueFiltered ${valueFiltered} ${typeof valueFiltered}`);
      return transformSmallNumbers(valueFiltered, specialChar);
    }
    value = Math.round(value);
    return transformSmallNumbers(value);


    function transformSmallNumbers(val, symbol = '') {
      if( val===0 ) { return `N/A`; }
      if (val < 10) { return `0${val}${symbol}`; }
      if ( val > 10 && val  < 999) { return `${val}${symbol}`; }
      if ( val > 999 && val < 1000000 ) {
        const separated = val.toString().split(',');
        separated[0] = separated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // console.log(separated.join(','));
        return separated.join(',');
      }
      if (val > 999999) {
        val = val * 1000;
        val = Math.round(val);
        val = val / 1000000;
        val = val / 1000;
        val = Math.round(val);
       // console.log(val);
        const separated = val.toString().split(',');
        separated[0] = separated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
       // console.log(separated.join(','));
        return separated.join(',');

      }

    }
  }

}



// 1 проценты
// 1.1 обрезать знак
// 1.2 округлить
// 1.3 если меньше 10 то добавить 0 и добавить процент
// 1.4 если больше то добавить процент и вернуть 

// 2 числа
// 2.1 округлить
// 2.2 опрределить меньше 100 или ьольше 1000
// 2.3 добавить 0 если меньше 100 или добавить запятую после целых если 1000
// 2.4 вернуть значение


//  3 числа с ярдами лямами
// 3.1 округилить
// 3.2 поделить на  1000
// 3.4 вернуть первые два порядка  
// поделить на  миллионы если больше миллионов  то млрд если меньше то млн