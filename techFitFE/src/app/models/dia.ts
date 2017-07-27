import { Usuario } from './usuario';
import { Habito } from './habito'

export class Dia {
	did : number;
	diaSemana : string;
	fechaActual : Date;
	estado : number;
	usuario : Usuario[];
	habito : Habito[];

	constructor(did:number, diaSemana:string, fechaActual:Date, estado:number,
		usuario:Usuario[], habito:Habito[]) {

		this.did = did;
		this.diaSemana = diaSemana;
		this.fechaActual = fechaActual;
		this.estado = estado;
		this.usuario = usuario;
		this.habito = habito;
	}
}