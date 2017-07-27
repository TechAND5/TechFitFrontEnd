import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario_component/usuario.component';
import { HabitoComponent } from './habito_component/habito.component';
import { DiaComponent } from './dia_component/dia.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HabitoComponent,
    DiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
