import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'databinding',
    templateUrl: `
        <div> 
            <input type="text" [(ngModel)]="text" (keyup)="onChange()"/>
            Value: {{ text }}
            <br>
            <button (click)="copyText()">Copy</button>
            Copy: {{ copyTextVar }}
        </div>
    `
})
export class DataBindingComponent implements OnInit {
    private text:string = "my texto";
    private copyTextVar:string = "";

    constructor() { }

    ngOnInit() { }

    private onChange(){
        if(this.text.length > 10){
            console.log("paso");
        } 
    }

    private copyText(){
        this.copyTextVar = this.text;
    }
}