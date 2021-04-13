import { Pipe, PipeTransform, ViewChild } from '@angular/core';

@Pipe({
    name: 'FilterAsignaturaPipe'
})
export class FilterAsignaturaPipe implements PipeTransform {
    transform(value: any, input: any): any {
        console.log(input);
        if (input) {
            return value.data.filter(val => {
                return val.nombreAsignatura.toString().toUpperCase().indexOf(input.toString().toUpperCase()) >= 0 ||
                    val.abreviatura.toString().toUpperCase().indexOf(input.toString().toUpperCase()) >= 0
            });
        } else {
            return value;
        }

    }

}