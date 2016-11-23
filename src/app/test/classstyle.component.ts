import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'class-style',
    template: `
        <button class="btn btn-default btn-lg" (click)="onClick()">
            <span 
                class="glyphicon glyphicon-star" 
                [ngClass]="{
                    'glyphicon-star-empty': !isFavorite,
                    'glyphicon-star': isFavorite
                }"
            >
            </span> Favorite 
        </button>

        <h3 [ngStyle]= "{'color': isFavorite ? 'red': 'blue'}" > 
            {{ isFavorite ? "Favorito": "No Favorito"}}
        </h3>
    `
})
export class ClassStyleComponent implements OnInit {
    @Input() isFavorite:boolean = false;
    @Output() change = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    private onClick(){
        this.isFavorite = !this.isFavorite;
    }

}