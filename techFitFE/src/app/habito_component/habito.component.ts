import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import { Habito } from '../models/habito';
import { Usuario } from '../models/usuario';
import { Dia } from '../models/dia';

@Component({// Este annotation nos ayuda a la configuración del componente
 	selector: 'habito',// En que selector se va a renderizar
 	templateUrl: './habito.component.html', // En que ruta esta su template
 	styleUrls: ['./habito.component.css']// En que ruta se encuentra su hoja de estilos
})
export class HabitoComponent {
	lista_habitos:Habito[];

	constructor(private _http:Http){
		this._http.get('http://www.mocky.io/v2/597b61e51200009308696e6b')
		.map(
			(response: Response) => {
				this.lista_habitos=<Habito[]>response.json(); 
				return this.lista_habitos;
			}
		)
		.do((habitos: Habito[]) => {
			console.log('getHabitos...',this.lista_habitos);
		})
		.catch(
			(error:any) => {
				console.log('Error de conexión:'+error);
				return Observable.throw(error.json().error || 'Server error');
			})

		.subscribe();	
	}
}

