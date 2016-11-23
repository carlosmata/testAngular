import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'content',
    templateUrl: `
        <div class="header">
            <h6> texto en header </h6>
            <ng-content select=".content-header"></ng-content>
        </div>
        <div class="body">
            <ng-content select=".content-body"></ng-content>
        </div>
    `,
    styles: [ 
        `
        .header {
            border: 2px solid red;
        }
        .body {
            border: 2px solid blue;
        }
        div {
            margin-bottom: 5px;
        }
    `]
})
export class ContentComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}