import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './routing';

import { UsuarioComponent } from './usuario_component/usuario.component';
import { HabitosComponent } from './habitos_component/habitos.component';
import { DiaComponent } from './dia_component/dia.component';
import { MenuComponent } from './menu_component/menu.component';
import { DatePickerComponent } from './datepicker/datepicker';
import { DetalleHabitoComponent } from './detalleHabito_component/detalleHabito.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HabitosComponent,
    DiaComponent,
    MenuComponent,
    DatePickerComponent,
    DetalleHabitoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
