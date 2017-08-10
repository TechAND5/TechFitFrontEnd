import { Component, OnInit } from '@angular/core';
import { Habito } from '../models/habito';
import { ActivatedRoute } from '@angular/router';

import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({// Este annotation nos ayuda a la configuración del componente
 	selector: 'crear-habito',// En que selector se va a renderizar
 	templateUrl: './crearHabito.component.html', // En que ruta esta su template
 	styleUrls: ['./crearHabito.component.css']// En que ruta se encuentra su hoja de estilos
})
export class CrearHabitoComponent {

}