export class Usuario {
	uid : number;
	email : string;
	password : string;
	nickname : string;
	nombre : string;
	apellido : string;

	constructor(uid:number, email:string, password:string, nickname:string, 
		nombre:string, apellido:string) {
		
		this.uid = uid;
		this.email = email;
		this.password = password;
		this.nickname = nickname;
		this.nombre = nombre;
		this.apellido = apellido; 
	}
}
