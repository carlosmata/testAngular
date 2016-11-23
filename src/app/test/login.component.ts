import { Component, OnInit } from '@angular/core';
import { AlbumService } from './webservices/album.service';
import { LoginResponse } from './webservices/login.response';

@Component({
    selector: 'login',
    template: `

    <form id="signin" class="navbar-form navbar-right" role="form">
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input [(ngModel)]="user" id="email" type="email" class="form-control" name="email" value="" placeholder="Email Address" >                                        
        </div>

        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input [(ngModel)]="password" id="password" type="password" class="form-control" name="password" value="" placeholder="Password">                                        
        </div>

        <button type="button" class="btn btn-primary" (click)="login()" >Login</button>
    </form>

    <h4> {{mensaje}} </h4>
    `
})
export class LoginComponent implements OnInit {
    private user:string = "";
    private password:string = "";
    private mensaje:string = "";
    constructor(private _albumService:AlbumService) { }

    ngOnInit() { }

    private login(){
        this._albumService.login(this.user, this.password).subscribe(
            data => this.processLogin(data.json()),
            error => this.processError(error)
        );
    }

    private processLogin(data:LoginResponse){
        this.mensaje = data.token;
    }

    private processError(error){
        this.mensaje = "Credenciales Incorrectas";
    }
}