import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DemoUtilsModule } from '../demo-utils/module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './routing';

import { UsuarioComponent } from './usuario_component/usuario.component';
import { HabitoComponent } from './habito_component/habito.component';
import { DiaComponent } from './dia_component/dia.component';
import { CalendarioComponent } from './calendario_component/calendario.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HabitoComponent,
    DiaComponent,
    CalendarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
