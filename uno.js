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
	let contadorMasculino = 0;
	let contadorFemenino = 0;
	let acumuladorEdad = 0;
	let promedio;
	let mayortemperatura; 
	let mayorNombreTemp;

	for( let i = 0; i < 5; i++){

		nombre = prompt("Ingrese nombre: ");
		while(nombre == "" || !isNaN(nombre)){
			nombre = prompt("nombre incorrecto");
		}

		temperatura = prompt("ingrese temperatura: ");
		while(isNaN(temperatura) || temperatura < 0){
			temperatura = parseFloat(prompt("Error"));
		}

		sexo = prompt("Ingrese sexo");
		while( sexo != 'f' && sexo != 'm'){
			sexo = prompt("invalido ingrese sexo");
		}

		edad = parseInt(prompt("ingrese edad:"));
		while( isNaN(edad) || edad <= 0 || edad > 120){
			edad = parseInt(prompt("edad inválida, ingrese edad"));
		}

		if (sexo == 'f') {
			contadorFemenino++;

			if( contadorFemenino == 1 || temperatura > mayortemperatura ){
				mayortemperatura = temperatura;
				mayorNombreTemp = nombre;
			}
		}
		else {
			contadorMasculino++;
		}

		acumuladorEdad += edad;
	}

	promedio = acumuladorEdad / 5;

	console.log("Hombres: "+ contadorMasculino + " Mujeres: " + contadorFemenino);
	console.log("Promedio de edad " + promedio + " años.");
	if (contadorFemenino == 0){
		console.log("no se registraron mujeres");
	}
	else{
		console.log("Mayor temp mujer: " + mayortemperatura + " grados. Se llama " + mayorNombreTemp);
	}
	


}