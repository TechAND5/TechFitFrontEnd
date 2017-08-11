document.getElementById('btnaceptarForm').onclick=function (evnt) {
    var valido = validaeditarhabitoConAPI();
    if(!valido) return false;
    else document.getElementById('btnaceptarForm').submit();
};

function validaeditarhabitoConAPI() {
	var itsOk=true;
	var titulo=document.getElementById('titulo');
	var dateinicio=document.getElementById('dateinicio');
	var datefinal=document.getElementById('datefinal');

	

	
	
	var bloques_error=document.getElementsByClassName('mensajes_error_habito');
	for (var i = 0; i < bloques_error.length; i++) {
		var mensajes_error = bloques_error[i].getElementsByTagName('div');
		for (var j = 0; j < mensajes_error.length; j++) mensajes_error[j].classList.remove('show');
	}//recorre el array de mensajes y los esconde mientras no falle el form. de mensajes y los esconde mientras no falle el form.
	
	if(!titulo.validity.valid){//si titulo NO es valido
		if(titulo.validity.typeMismatch){
			document.getElementById('titulo[typeMismatch]').classList.add('show');//muestro el mensaje de error
			titulo.classList.add('errorInput');
			}
		if(titulo.validity.valueMissing){
			document.getElementById('titulo[valueMissing]').classList.add('show');
			titulo.classList.add('errorInput');
			}
		if(titulo.validity.patternMismatch){
                document.getElementById('titulo[patternMismatch]').classList.add('show');
                titulo.classList.add('errorInput');
                }	
		itsOk=false	
	}
	
	if(!dateinicio.validity.valid){//si titulo NO es valido
		if(dateinicio.validity.typeMismatch){
			document.getElementById('dateinicio[typeMismatch]').classList.add('show');//muestro el mensaje de error
			titulo.classList.add('errorInput');
			}
		if(dateinicio.validity.valueMissing){
			document.getElementById('dateinicio[valueMissing]').classList.add('show');
			titulo.classList.add('errorInput');
			}
		itsOk=false	
	}

	if(!datefinal.validity.valid){//si titulo NO es valido
		if(datefinal.validity.typeMismatch){
			document.getElementById('datefinal[typeMismatch]').classList.add('show');//muestro el mensaje de error
			titulo.classList.add('errorInput');
			}
		if(datefinal.validity.valueMissing){
			document.getElementById('datefinal[valueMissing]').classList.add('show');
			titulo.classList.add('errorInput');
			}
		itsOk=false	
	}
	
	// debugger;
	return itsOk;
}