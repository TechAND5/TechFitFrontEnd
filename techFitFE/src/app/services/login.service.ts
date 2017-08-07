import { Injectable } from '@angular/core';
import {TokenService} from '../persistence/token.service';
import { Router } from '@angular/router';
import { Observable,Subject } from 'rxjs';

@Injectable()
export class LoginService{
    _isLogged:boolean=false;
    isloggedChange: Subject<boolean> = new Subject<boolean>();

	constructor(private _tokenService:TokenService,private router: Router){
		let currentUser=this._tokenService.getToken();
        this._isLogged=currentUser!=null && currentUser.token!=null;
        this.isloggedChange.next(this._isLogged);
	}

	updateLogged():void{
		let currentUser=this._tokenService.getToken();
        this._isLogged=currentUser!=null && currentUser.token!=null;
        console.log("LoginService.updateLogged:",this._isLogged);
        this.isloggedChange.next(this._isLogged);
	}
	
}