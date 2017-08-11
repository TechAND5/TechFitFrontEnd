import { Injectable } from '@angular/core';
import { Http,Jsonp, Headers, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

import {TokenService} from '../persistence/token.service'
import {LoginService} from '../services/login.service';

import 'rxjs/add/operator/map'
 
@Injectable()
export class AuthenticationService{
    public token: string;
    private options: any;
    
    constructor(private _http: Http, private _tokenService:TokenService, private _loginService:LoginService) {
        // set token if saved in local storage
        let currentUser = _tokenService.getToken();
        this.token = currentUser && currentUser.token;
    }
 
    login(username:string, password:string): Observable<boolean> {
        let headers = new Headers({ 'Accept': 'application/json','username':username,'password':password });
        this.options = new RequestOptions({ headers: headers });

        return this._http.post("http://www.mocky.io/v2/598892a72700002f05afef77",this.options)//http://172.27.100.130/techFit/apiFit/usuarios
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                console.log('Response from auth:',response,response.text());
                let token = response.text();

                if (response.status==200 && token) {
                    this.token = token;
                    this._tokenService.saveToken(username,token);
                    this._loginService.updateLogged();

                    return true;
                } else {return false;}
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        this._tokenService.delToken();
    }

}