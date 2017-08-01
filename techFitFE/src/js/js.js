var navbar=document.getElementById("navbarSide");
var hideh1=document.getElementById("btnOcultar");
var showh1= document.getElementById("navbarSideButton");

hideh1.onclick=function () {
	navbar.className='navbar-side pull-left desaparece';
}
showh1.onclick =function () {
	navbar.className='navbar-side pull-left reveal';
}
 
