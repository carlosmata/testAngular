import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: `
        <h3>Detail</h3>
        <button (click)="onClick()">Regresar</button>
    `
})
export class DetailComponent implements OnInit {
    private id:string;

    constructor(private _router:Router, private _activatedRoute:ActivatedRoute) 
    { 
        this.id = _activatedRoute.snapshot.params['id'];
        console.log(this.id);
    }

    ngOnInit() { }

    private onClick(){
        this._router.navigate(['/']);
    }
}