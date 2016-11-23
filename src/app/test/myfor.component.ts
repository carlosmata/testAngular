import { Component, OnInit } from '@angular/core';
import { AlbumService } from './webservices/album.service';
import { Response } from './webservices/response';
import { DataResponse } from './webservices/data.response';
import { TeamResponse } from './webservices/team.response';


@Component({
    selector: 'myfor',
    template: `
        <!-- <table class="table table-striped table-bordered">
            <colgroup>
                <col style="width:50px">
                <col style="width:40%">
                <col style="width:40%">
                <col style="width:20%">
            </colgroup>

            <tr>
                <th> </th>
                <th> Nombre </th>
                <th> Apellido </th>
                <th> Opciones </th>
            </tr>
            <tr *ngFor="let row of data"> 
                <td><img src="{{ row['image'] }}"/> </td>
                <td><h3> {{ row['name'] }} </h3> </td>
                <td><h3> {{ row['lastName'] }} </h3> </td>
                <td>
                    <button class="btn btn-xs btn-danger" (click)="delete(row)" > Eliminar </button>
                    <button class="btn btn-xs btn-success" (click)="show(row['id'])"> Ver </button> 
                </td>
            </tr>
        </table> -->

        <!-- <content *ngFor="let user of data">
            <h2 class="content-header"> {{ user['name'] }} </h2>
            <h2 class="content-body"> {{ user ['lastName'] }} </h2>
        </content> -->

        <table class="table table-striped table-bordered">
            <colgroup>
                <col style="width:50%">
                <col style="width:50%">
            </colgroup>

            <tr>
                <th> Local </th>
                <th> Visitante </th>
            </tr>
            <tr *ngFor="let row of albums"> 
                <td><h4> <img src="{{ row['localTeamLogo'] }}"/>   {{ row['localTeamName'] }}</h4> </td>
                <td><h4> <img src="{{ row['visitorTeamLogo'] }}"/> {{ row['visitorTeamName'] }} </h4> </td>
            </tr>
        </table>

        TeamId <input type="text" [(ngModel)]="teamId" (keyup)="changeTeam()"/>
        <table class="table table-striped table-bordered">
            <colgroup>
                <col style="width:50%">
                <col style="width:50%">
            </colgroup>

            <tr>
                <th> Logo </th>
                <th> Equipo </th>
            </tr>
            <tr> 
                <td> <img src="{{ teamLogo }}"/> </td>
                <td><h4> {{ teamName }} </h4> </td>
            </tr>
        </table>
    `
})
export class MyForComponent implements OnInit {
    private teamId:number;
    private teamLogo: string;
    private teamName: string;
    private data:Array<Object>; /*= [
        {id: 1, name:"Carlos1", lastName:"Mata1", image:"http://lorempixel.com/50/50"},
        {id: 2, name:"Carlos2", lastName:"Mata2", image:"http://lorempixel.com/51/50"},
        {id: 3, name:"Carlos3", lastName:"Mata3", image:"http://lorempixel.com/52/50"},
        {id: 4, name:"Carlos4", lastName:"Mata4", image:"http://lorempixel.com/53/50"},
        {id: 5, name:"Carlos5", lastName:"Mata5", image:"http://lorempixel.com/54/50"},
        {id: 6, name:"Carlos6", lastName:"Mata6", image:"http://lorempixel.com/55/50"},
        {id: 7, name:"Carlos7", lastName:"Mata7", image:"http://lorempixel.com/56/50"},
        {id: 8, name:"Carlos8", lastName:"Mata8", image:"http://lorempixel.com/57/50"},
        {id: 9, name:"Carlos9", lastName:"Mata9", image:"http://lorempixel.com/58/50"},
        {id: 10, name:"Carlos10", lastName:"Mata10", image:"http://lorempixel.com/59/50"},
        {id: 11, name:"Carlos11", lastName:"Mata11", image:"http://lorempixel.com/60/50"},
        {id: 12, name:"Carlos12", lastName:"Mata12", image:"http://lorempixel.com/61/50"},
        {id: 13, name:"Carlos13", lastName:"Mata13", image:"http://lorempixel.com/62/50"},
        {id: 14, name:"Carlos14", lastName:"Mata14", image:"http://lorempixel.com/63/50"},
        {id: 15, name:"Carlos15", lastName:"Mata15", image:"http://lorempixel.com/64/50"},

    ];*/
    private albums;

    constructor(private _albumService:AlbumService) { 
        this._albumService.getList().subscribe(
            data => this.processData(data.json()),
            error => this.processError(error)
        );
    }

    ngOnInit() { }

    private delete(row:Object): void{
        console.log(row);
    }

    private show(rowId:number): void{
        console.log(rowId);
    }

    private processData(data:DataResponse){
        this.albums = data.data;
        console.log(data.data);
    }

    private processError(error){
        console.log("Error:", error);
    }

    private changeTeam(){
        
        if(this.teamId != null && this.teamId != undefined){
            console.log("Team Id", this.teamId)
        }
        
        /*this._albumService.getTeam(this.teamId).subscribe(
            data => this.processTeam(data.json()),
            error => this.processError(error)
        );*/
    }

    private processTeam(data:TeamResponse){
        if(data.responseCode == 0)
        {
            this.teamLogo = data.image;
            this.teamName = data.name;
        }
    }

}