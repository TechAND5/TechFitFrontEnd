import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class TokenService{
	public token:String='null';

	saveToken(username:string,token:string):boolean{
		localStorage.setItem('UserToken', JSON.stringify({ username: username, token: token }));
		return true;
	}

	getToken():any{
		let currentUser = JSON.parse(localStorage.getItem('UserToken'));
		if(currentUser) this.token=currentUser.token;
		return currentUser;
	}

	delToken():boolean{
		localStorage.removeItem('UserToken');
		this.token=null;
		return true;
	}
}