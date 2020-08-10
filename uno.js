/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let temperatura;
	let sexo;
	let edad;
	let edadPromedio;
	let nombreMayorTemp;
	let mayorTemp;
	let contHombre = 0;
	let contMujer = 0;
	let flagMayorTemp = 0;

	for( let i = 0; i < 5; i++){

		nombre = prompt("Ingrese nombre: ");
		temperatura = prompt("Ingrese la temperatura del paciente: ");
		while ( !(temperatura > 20 && temperatura < 45)) {
			temperatura = parseInt(prompt("Temperatura inválida, ingrese otra temperatura"));
		}
		sexo = prompt('Ingrese sexo del paciente con "m" o "f"');
		while ( sexo != "f" && sexo != "m" ) {
			sexo = prompt('Sexo inválido ingrese "m" o "f"');
		}
		edad = parseInt(prompt("Ingrese la edad del paciente"));
		while( !(edad > 1 && edad < 120) ){
			edad = parseInt(prompt("Ingrese edad válida"));
		}
	}

	// Punto a:
	if (sexo == "m"){

	contHombre++;
	
}
else {

	contMujer++;
}

console.log("Ingresaron " +  contMujer +" mujeres y "+ contHombre + " hombres.");

// Punto b:
	edadPromedio = edad / 5;
	console.log("La edad promedio es: " + edadPromedio);


//Punto c:

switch(sexo){
	case "f":
		contMujer++;
		
		if(flagMayorTemp == 0 || temperatura > mayorTemp){

			mayorTemp = temperatura;
			nombreMayorTemp = mayorTemp;
			flagMayorTemp = 1;
		}
		break;
	
}


if( flagMayorTemp == 0 ) {
	console.log( "No hay mujeres");
}else{
	console.log("La mujer con la temperatura más alta tiene: " + nombreMayorTemp );
}

}
