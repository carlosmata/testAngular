import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AlbumService {

    constructor(private _http:Http) { }

    public getList(){
        return this._http.get("http://deviabox.com/quinielazos/gameList")
    } 

    public getTeam(teamId:number) {
        return this._http.get("http://deviabox.com/quinielazos/team?id=" + teamId);
    }

    public login(user:string, password:string){
        return this._http.get("http://deviabox.com/quinielazos/milogin?user=" + user + "&password=" + password);
    }
}