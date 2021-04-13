import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'FilterAreaPipe'
})
export class FilterAreaPipe implements PipeTransform {

    transform(value: any, input: any): any {
        console.log(input);
        if (input) {
            return value.data.filter(val => val.nombreArea.toString().toUpperCase().indexOf(input.toString().toUpperCase()) >= 0);
        } else {
            return value;
        }
    }

}