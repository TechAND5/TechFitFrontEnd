import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Habito } from '../models/habito';
import { Usuario } from '../models/usuario';
import { Dia } from '../models/dia';

@Component({// Este annotation nos ayuda a la configuración del componente
 	selector: 'habitos',// En que selector se va a renderizar
 	templateUrl: './habitos.component.html', // En que ruta esta su template
 	styleUrls: ['./habitos.component.css']// En que ruta se encuentra su hoja de estilos
})
export class HabitosComponent {
	lista_habitos:any;

	constructor(private _http:Http){
		this._http.get('http://www.mocky.io/v2/5980a2251100001f0f1cfada')
		.map(
			(response: Response) => {
				this.lista_habitos=<any[]>response.json(); 
				return this.lista_habitos;
			}
		)
		.do(
			(misHabitos: any[]) => {
			console.log('getHabitos...', misHabitos);
		})
		.catch(
			(error:any) => {
				console.log('Error de conexión:', error);
				return Observable.throw(error.json().error || 'Server error');
			})

		.subscribe();	
	}
}

