import { Usuario } from './usuario'

export class Habito {
	hid : number;
	titulo : string;
	descripcion : string;
	usuario : Usuario[];
	fechaI : Date;
	fechaF : Date;
	progreso : number;
	estado : number;
	diaSemana : string;

	constructor(hid:number, titulo:string, descripcion:string, usuario:Usuario[], 
		fechaI:Date, fechaF:Date, progreso:number, estado:number, diaSemana:string) {
		
		this.hid = hid;
		this.titulo = titulo;
		this.descripcion = descripcion;
		this.usuario = usuario;
		this.fechaI = fechaI;
		this.fechaF = fechaF;
		this.progreso = progreso;
		this.estado = estado;
		this.diaSemana = diaSemana;
}
