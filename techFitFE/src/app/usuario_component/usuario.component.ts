import { Component } from '@angular/core';// Importamos la funcionalidad de compontente del core de Angular

@Component({// Este annotation nos ayuda a la configuración del componente
  selector: 'usuario',// En que selector se va a renderizar
  templateUrl: './usuario.component.html', // En que ruta esta su template
  styleUrls: ['./usuario.component.css']// En que ruta se encuentra su hoja de estilos
})
export class UsuarioComponent {
}
