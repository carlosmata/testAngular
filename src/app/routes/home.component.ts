import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
        <h3>Home</h3>
        <button (click)="onClick()">Detalle</button>
    `
})
export class HomeComponent implements OnInit {
    constructor(private _router:Router) { }

    ngOnInit() { }

    private onClick(){
        this._router.navigate(['/detail', 10]);
    }
}