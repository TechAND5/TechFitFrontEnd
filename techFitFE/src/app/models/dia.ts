import { Usuario } from './usuario';
import { Habito } from './habito'

export class Dia {
	did : number;
	diaSemana : string;
	fechaActual : Date;
	estado : number;
	habito : Habito[];

	constructor(did:number, diaSemana:string, fechaActual:Date,
		estado:number, habito:Habito[]) {

		this.did = did;
		this.diaSemana = diaSemana;
		this.fechaActual = fechaActual;
		this.estado = estado;
		this.habito = habito;
	}
}