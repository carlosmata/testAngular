import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customPipe'
})

export class CustomPipe implements PipeTransform {
    transform(value: string, limit: number): any {
        
        return value.substring(0, limit) + "....";      
    }
}