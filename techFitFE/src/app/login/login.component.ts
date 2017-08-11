import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from '../api/auth.service';
import {TokenService} from '../persistence/token.service';

import { Usuario } from '../models/usuario';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [AuthenticationService,]
})

export class LoginComponent implements OnInit {
    private _isLogged:boolean=false;
    model: any = {};
    loading = false;
    error = '';

    constructor(private router: Router, private _AuthenticationService: AuthenticationService, private _tokenService:TokenService) { }

    ngOnInit() {
        let currentUser=this._tokenService.getToken();
        this._isLogged=currentUser && currentUser.token;

        if(this._isLogged) this.router.navigate(['/places']);
    }
 
    login() {
        this.loading = true;
        this._AuthenticationService.login(this.model.username, this.model.password)
            .subscribe(
                result => {
                    if (result === true) {
                        // login successful
                        console.log("login success!!!");
                        this.router.navigate(['/habitos']);
                    } else {
                        // login failed
                        this.error = 'Username or password is incorrect';
                        this.loading = false;
                    }
                },
                error=>{
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            );
    }

}