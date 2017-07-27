import { Usuario } from './usuario';
import { Dia } from './dia';

export class Habito {
	hid : number;
	titulo : string;
	descripcion : string;
	usuario : Usuario[];
	fechaI : Date;
	fechaF : Date;
	progreso : number;
	estado : number;
	listaDias : Array<Dia[]>;

	constructor(hid:number, titulo:string, descripcion:string, usuario:Usuario[], 
		fechaI:Date, fechaF:Date, progreso:number, estado:number, listaDias:Array<Dia[]>) {
		
		this.hid = hid;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.usuario = usuario;
		this.fechaI = fechaI;
		this.fechaF = fechaF;
		this.progreso = progreso;
		this.estado = estado;
		this.listaDias = listaDias;
	}
}
