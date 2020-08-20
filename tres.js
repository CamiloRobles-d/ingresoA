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
let nombre;
let lugar;
let cantidad;
let temporada;
let lugarFavorito;
let contadorBariloche = 0;
let contadorSalta = 0;
let contadorCataratas = 0;
let nombreMaxPasajeros;
let maxPasajeros;
let contadorInvierno = 0
let acumuladorInvierno = 0;
let flag = 0;
let promedio;
let seguir;

do{
    nombre = prompt("Ingrese nombre: ");
	while(nombre == "" || !isNaN(nombre)){
		nombre = prompt("nombre incorrecto");
    }
    
    lugar = prompt("Ingrese lugar");
	while( lugar != 'bariloche' && lugar != 'cataratas' && lugar != "salta") {
		lugar = prompt("invalido ingrese lugar");
    }   

    temporada = prompt("Ingrese temporada");
	while( temporada != 'verano' && temporada != 'otoño' && temporada != "invierno" && temporada != "primavera") {
		temporada = prompt("invalido ingrese temporada");
    }    
    
    cantidad = parseInt(prompt("ingrese cantidad:"));
	while( isNaN(cantidad) || cantidad <= 0 ){
		cantidad = parseInt(prompt("cantidad inválida, ingrese otra cantidad"));
    }
    
    if( lugar == "bariloche"){
        contadorBariloche++;
    }
    else if( lugar == "cataratas"){
        contadorCataratas++;
    }
    else{
        contadorSalta++;
    }
    /*
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
    */
    if(flag == 0 || cantidad > maxPasajeros){
        maxPasajeros = cantidad;
        nombreMaxPasajeros = nombre;
        flag = 1;
    }

    if(temporada == "invierno"){
        contadorInvierno++;
        acumuladorInvierno += cantidad;
    }

    seguir = prompt("quiere ingresar otro viaje?: ");
}while(seguir == 's');

if( contadorBariloche > contadorCataratas && contadorBariloche > contadorSalta){
    lugarFavorito = "Bariloche";
}
else if( contadorCataratas > contadorBariloche && contadorCataratas > contadorSalta){
    lugarFavorito = "Cataratas";
}
else{
    lugarFavorito = "Salta";
}

if(contadorInvierno != 0){
    promedio = acumuladorInvierno / contadorInvierno;
}

console.log("el lugar más elegido: " + lugarFavorito);
console.log("el nombre del titular que lleva más pasajeros es " + nombreMaxPasajeros + " con " + maxPasajeros + " pasajeros");
console.log("el promedio de personas por viaje que viajan en invierno es " + promedio);

}