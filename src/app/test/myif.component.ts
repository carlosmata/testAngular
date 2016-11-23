import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'myif',
    template:`
        <div class="main">
            <div *ngIf="red" class="element1"> </div>
            <div *ngIf="yellow" class="element2"> </div>
            <div *ngIf="blue" class="element3"> </div>
        </div>
    `,
    styles:[`
        .main{
            display: flex;
            flex-wrap: nowrap;
        }
        .element1 {
            background-color:red;
            height: 100px;
            width: 100%;
        }
        .element2 {
            background-color:yellow;
            height: 100px;
            width: 100%;
        }
        .element3 {
            background-color:blue;
            height: 100px;
            width: 100%;
        }
    `]
})
export class MyIfComponent implements OnInit {
    @Input() red:boolean = true;
    @Input() yellow:boolean = true;
    @Input() blue:boolean = true;

    constructor() { }

    ngOnInit() { }
}