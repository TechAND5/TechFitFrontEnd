import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular

@Component({// Este annotation nos ayuda a la configuración del componente
  selector: 'habito',// En que selector se va a renderizar
  templateUrl: './habito.component.html', // En que ruta esta su template
  styleUrls: ['./habito.component.css']// En que ruta se encuentra su hoja de estilos
})
export class HabitoComponent {
}