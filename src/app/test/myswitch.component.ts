import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'myswitch',
    template: `
        <ul class="nav nav-pills">
            <li [class.active]="viewMode == 'map' ">
                <a (click)="viewMode = 'map'"> Map View </a>
            </li>
            <li [class.active]="viewMode == 'list' ">
                <a (click)="viewMode = 'list'"> List View </a>
            </li>
        </ul>

        <div [ngSwitch]="viewMode"> 
            <div *ngSwitchCase="'map'"> Vista de Map </div>
            <div *ngSwitchCase="'list'"> Vista de List </div>
        </div>
    `
})
export class MySwitchComponent implements OnInit {
    private viewMode = 'map';
    
    constructor() { }

    ngOnInit() { }
}