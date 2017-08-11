import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {TokenService} from '../persistence/token.service';
import {LoginService} from '../services/login.service';

import { Usuario } from '../models/usuario';

@Component({
    selector: 'logout',
    templateUrl: './login.component.html'
})

export class LogoutComponent{
    private _isLogged:boolean=false;
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router, private _tokenService:TokenService, private _loginService:LoginService) {
        this._tokenService.delToken();
        this._loginService.updateLogged();
        this.router.navigate(['/login']);
    }

}