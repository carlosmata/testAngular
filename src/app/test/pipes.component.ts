import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pipes',
    template: `
      {{title | uppercase}}
      <br/>
      {{students | number}}
      <br/>
      {{ratings | number:'2.2-2'}}
      <br/>
      {{price | currency:'MXN': true: '2.2-2'}}
      <br/>
      {{date | date:'MMM yyyy'}}
      <br/>
      {{objetoJSON | json}}
      <br/>
      {{lgText | customPipe:10}}
    `
})
export class PipesComponent implements OnInit {
    private title:string = "curso de angular2";
    private ratings:number = 4.9745;
    private students:number = 5981;
    private price: number = 1231232.54;
    private date:Date = new Date(2016, 11, 17);
    private objetoJSON:Object = {
        prop1: "value",
        prop2: 12,
        prop3: {minipro: 1, minipro2: "hola"},
        prop4:  new Date(2016, 11, 17)
    }
    private lgText:string = "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo. Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).";

    constructor() { }

    ngOnInit() { }
}