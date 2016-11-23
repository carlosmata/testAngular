import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Login } from './login';

@Component({
    selector: 'myform',
    template: `
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div class="form-group">
            <label [ngClass]="{'rojo': !user.valid}" > Usuario </label>
            <input type="text" class="form-control" 
            [(ngModel)]="login.user" name="user" required #user="ngModel"/>

            <h5 *ngIf="!user.valid" class="rojo"> Falta usuario </h5>   
        </div>
        <div class="form-group">
            <label> Contraseña </label>
            <input type="password" class="form-control" 
            [(ngModel)]="login.password" name="password" required/>  
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!f.valid"> Enviar </button>
    </form>
    `,
    styles: [ `
        .rojo{
            color:red;
        }
    `
    ]
})
export class FormComponent implements OnInit {
    private login:Login;

    constructor() {
        this.login = {
            user: 'cns',
            password: ''
        };
     }

    ngOnInit() { }

    private onSubmit(form:NgForm){
        console.log(form);
        console.log(this.login);
    }
}