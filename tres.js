/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/

function mostrar()
{
	let titular;
    let lugar;
    let temporada;
    let cantPersonas;
    let lugarMasElegido;
    let promedioPersonasInvierno;
    let cantidadMayorPasajeros;
    let nombreMayorPasajeros;
    let flagNombreMayorPasajeros = 0;
	let contadorPersonasInvierno = 0;
    let personasInvierno = 0;
    let contadorBariloche = 0;
    let contadorCataratas = 0;
	let contadorSalta = 0;
	
    do{
        titular = prompt("Ingrese el nombre del titular: ");
        while(!(titular)){
            titular = prompt("Nombre inválido, ingrese otro nombre.");
        }

        lugar = prompt('Ingrese un lugar("Bariloche", "Cataratas" o "Salta")');
        while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
            lugar = prompt('Error. Ingrese un lugar( "Bariloche", "Cataratas" o "Salta")');
        }

        temporada = prompt('Ingrese una temporada("otoño", "invierno", "verano" o "primavera")');
        while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
            temporada = prompt('Error. Ingrese una temporada("otoño", "invierno", "verano" o "primavera")');
        }

        cantPersonas = parseInt(prompt("Ingrese cantidad de personas que viajan (mínimo 1 y máximo 6): "));
        while(!(cantersonas >= 1 && cantPersonas <= 6)){
            cantPersonas = parseInt(prompt("Número no reconocido, ingrese una cantidad válida de personas (mínimo 1 y máximo 6):"));
        }

        if(flagNombreMayorPasajeros == 0 || cantPersonas > cantidadMayorPasajeros){
            cantidadMayorPasajeros = cantPersonas;
            nombreMayorPasajeros = titular;
            flagNombreMayorPasajeros = 1;

        }
                         	
        switch(lugar){
            case "bariloche":
                contadorBariloche++;
              
                break;
            case "cataratas":
                contadorCataratas++;
                break;
            case "salta":
                contadorSalta++;
                break;
        }

        switch(temporada){
            case "invierno":
                contadorPersonasInvierno++;
            	personasInvierno += cantPersonas;
        }
		seguir = prompt("Desea ingresar un titular?");
		
    }while(seguir == "s");

    if (contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
		lugarMasElegido = "Bariloche";
	} else if (contadorCataratas >= contadorBariloche && contadorCataratas > contadorSalta) {

		lugarMasElegido = "Cataratas";

	} else {

		lugarMasElegido = "Salta";

	}

    promedioPersonasInvierno = personasInvierno / contadorPersonasInvierno;
  

    console.log("El lugar con más visitas es:  " + lugarMasElegido );
    console.log("Titular que llevas más personas es:  " + nombreMayorPasajeros );
    

    if(contadorPersonasInvierno == 0){
        console.log( "En invierno no hay gente viajando." );
    }else{
        console.log("EN invierno el promedio de viajeos es de:  " + promedioPersonasInvierno );
    }
    

}
