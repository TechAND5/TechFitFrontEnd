import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular

@Component({// Este annotation nos ayuda a la configuración del componente
  selector: 'app-root',// En que selector se va a renderizar
  templateUrl: './app.component.html', // En que ruta esta su template
  styleUrls: ['./app.component.css']// En que ruta se encuentra su hoja de estilos
})
export class AppComponent {
	// La clase que vamos a exportar le dará vida a nuestros componente, podemos 
	//tener incluso variables y funciones queramos usar en nuestros HTML ya montado
  title = 'app works!!';
}
