import { Component } from '@angular/core';

@Component({// Este annotation nos ayuda a la configuración del componente
  selector: 'menu',// En que selector se va a renderizar
  templateUrl: './menu.component.html', // En que ruta esta su template
  styleUrls: ['./menu.component.css']// En que ruta se encuentra su hoja de estilos
})
export class MenuComponent {
	claseMenu="navbar-side pull-left desaparece";

	ocultarMenu():void{
		this.claseMenu="navbar-side pull-left desaparece";
	}
	
	mostrarMenu():void{
		this.claseMenu="navbar-side pull-left reveal";
	}
}