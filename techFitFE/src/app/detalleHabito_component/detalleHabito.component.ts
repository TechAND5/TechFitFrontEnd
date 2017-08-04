import { Component, OnInit } from '@angular/core';
import { Habito } from '../models/habito';
import { ActivatedRoute } from '@angular/router';

import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Component({// Este annotation nos ayuda a la configuración del componente
 	selector: 'detalle-habito',// En que selector se va a renderizar
 	templateUrl: './detalleHabito.component.html', // En que ruta esta su template
 	styleUrls: ['./detalleHabito.component.css']// En que ruta se encuentra su hoja de estilos
})
export class DetalleHabitoComponent implements OnInit {
	private selDate:string='MM/DD/YYYY';
    private minDate:string='01/01/2016';
    private maxDate:string='12/31/2017';
    private disableDays:Array<number>=[0,6];    //For Sunday and Saturday
    private toContainPrevMonth:boolean = false;
    private toContainNextMonth:boolean = false;
    private value:string='';
   
    private _habito:Habito;
    private _hid:number;
	
    setInputDate(event) {
        this.value = event.target.value;
    }
    
	setDate(date){
		this.selDate = date;
	}

    constructor(private route: ActivatedRoute, private _http:Http) {
            
    }

    ngOnInit() {
    // Subscribe to route params
    this.route.params.subscribe(params => {
      console.log('params',params);
      this._hid = params['hid'];
      console.log("hid: ",this._hid);

      this._http.get('http://www.mocky.io/v2/59847f85110000930d416826')
        .map(
            (response: Response) => {
                this._habito=<Habito>response.json(); 
                return this._habito;
            }
        )
        .do(
            (habitos: Habito) => {
            console.log('Detalle Habito...', habitos);
        })
        .catch(
            (error:any) => {
                console.log('Error de conexión:',error);
                return Observable.throw(error.json().error || 'Server error');
            })

        .subscribe();


    });
  }
}