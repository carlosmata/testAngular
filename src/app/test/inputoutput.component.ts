import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'inputoutput',
    template: `
        <div>
            <input type="text" [(ngModel)]= "myValue" />
            <button (click)="OnClick()"> Send </button> 
        </div>
    `
})
export class InputOutputComponent implements OnInit {
    @Input() myValue:string;
    @Output() myClick = new EventEmitter();
    @Output() otherClick = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    private OnClick(){
        this.myClick.emit({ 
            nombre: this.myValue,
            length: this.myValue.length
        });

        this.otherClick.emit();
    }

    public getValue():string {
        return this.myValue;
    }

}