import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './routing';

import { HabitosComponent } from './habitos_component/habitos.component';
import { MenuComponent } from './menu_component/menu.component';
import { DatePickerComponent } from './datepicker/datepicker';
import { DetalleHabitoComponent } from './detalleHabito_component/detalleHabito.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';
import { CrearHabitoComponent } from './crearHabito_component/crearHabito.component';

import { LoginService } from './services/login.service';
import { AuthenticationService } from './api/auth.service';
import { TokenService } from './persistence/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HabitosComponent,
    MenuComponent,
    DatePickerComponent,
    DetalleHabitoComponent,
    LoginComponent,
    LogoutComponent,
    CrearHabitoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [LoginService, AuthenticationService, TokenService],
  bootstrap: [AppComponent],

})
export class AppModule { }
