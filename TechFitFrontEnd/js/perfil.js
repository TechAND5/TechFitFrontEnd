document.getElementById('btnperfilForm').onclick=function (evnt) {
    var valido = validaperfilConAPI();
    if(!valido) return false;
    else document.getElementById('btnperfilForm').submit();
};

function validaperfilConAPI() {
	var itsOk=true;
	var name=document.getElementById('name');
	var username=document.getElementById('username');
	var password=document.getElementById('password');
	var email=document.getElementById('email');

	

	
	
	var bloques_error=document.getElementsByClassName('mensajes_error_perfil');
	for (var i = 0; i < bloques_error.length; i++) {
		var mensajes_error = bloques_error[i].getElementsByTagName('div');
		for (var j = 0; j < mensajes_error.length; j++) mensajes_error[j].classList.remove('show');
	}//recorre el array de mensajes y los esconde mientras no falle el form. de mensajes y los esconde mientras no falle el form.
	
	if(!name.validity.valid){
		if(name.validity.typeMismatch){
			document.getElementById('name[typeMismatch]').classList.add('show');//muestro el mensaje de error
			name.classList.add('errorInputPerfil');
			}
		if(name.validity.valueMissing){
			document.getElementById('name[valueMissing]').classList.add('show');
			name.classList.add('errorInputPerfil');
			}
		if(name.validity.patternMismatch){
                document.getElementById('name[patternMismatch]').classList.add('show');
                name.classList.add('errorInputPerfil');
                }	
		itsOk=false	
	}
	
	if(!username.validity.valid){//si titulo NO es valido
		if(username.validity.typeMismatch){
			document.getElementById('username[typeMismatch]').classList.add('show');//muestro el mensaje de error
			username.classList.add('errorInputPerfil');
			}
		if(username.validity.valueMissing){
			document.getElementById('username[valueMissing]').classList.add('show');
			username.classList.add('errorInputPerfil');
			}
		itsOk=false	
	}

	if(!email.validity.valid){//si titulo NO es valido
		if(email.validity.typeMismatch){
			document.getElementById('email[typeMismatch]').classList.add('show');//muestro el mensaje de error
			email.classList.add('errorInputPerfil');
			}
		if(email.validity.valueMissing){
			document.getElementById('email[valueMissing]').classList.add('show');
			email.classList.add('errorInputPerfil');
			}
		itsOk=false	
	}

	if(!password.validity.valid){//si titulo NO es valido
		if(password.validity.typeMismatch){
			document.getElementById('password[typeMismatch]').classList.add('show');//muestro el mensaje de error
			password.classList.add('errorInputPerfil');
			}
		if(password.validity.valueMissing){
			document.getElementById('password[valueMissing]').classList.add('show');
			password.classList.add('errorInputPerfil');
			}
		itsOk=false	
	}
	
	// debugger;
	return itsOk;
}