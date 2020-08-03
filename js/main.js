/*obtenemos la ubicacion principal donde nos encontramos*/
let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function(){
	/*obtenemos la desplazamiento actual*/
	let desplazamientoActual = window.pageYOffset;

	/*condicionamos ocultar y mostrar el menu*/
	if(ubicacionPrincipal >= desplazamientoActual){
		document.getElementsByTagName("nav")[0].style.top = "0px"

	}else{
		document.getElementsByTagName("nav")[0].style.top = "-100px"
	}

	ubicacionPrincipal = desplazamientoActual;

})

/*======Mostrar y ocultar menu cuando estee en dispositivos pequeños====*/

