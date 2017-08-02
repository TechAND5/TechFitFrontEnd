import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular

@Component({// Este annotation nos ayuda a la configuración del componente
  selector: 'app-root',// En que selector se va a renderizar
  templateUrl: './app.component.html', // En que ruta esta su template
  styleUrls: ['./app.component.css']// En que ruta se encuentra su hoja de estilos
})
export class AppComponent {

	private selDate:string='MM/DD/YYYY';
    private minDate:string='01/01/2016';
    private maxDate:string='12/31/2017';
    private disableDays:Array<number>=[0,6];    //For Sunday and Saturday
    private toContainPrevMonth:boolean = false;
    private toContainNextMonth:boolean = false;
    private value:string='';
	
    setInputDate(event) {
        this.value = event.target.value;
    }
	setDate(date){
		this.selDate = date;
	}
}
