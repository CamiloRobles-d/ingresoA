/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
 let marca;
 let precio;
 let peso;
 let tipo;
 let acumuladorPeso = 0;
 let mayorPrecioLiquido;
 let precioLiquidoCaro;
 let marcaLiquidoCaro;
 let flagLiquido = 0;
 let pesoSolidoLiviano;
 let marcaSolidoLiviano;
 let flagSolido = 0;
 let seguir;

  do{
    marca = prompt("Ingrese marca: ");
		while(marca == "" || !isNaN(marca)){
			marca = prompt("marca incorrecta");
		}
    precio = prompt("ingrese precio: ");
		while(isNaN(precio) || precio < 0){
			precio = parseFloat(prompt("Error"));
		}
    peso = prompt("ingrese peso: ");
		while(isNaN(peso) || peso < 0){
			peso = parseFloat(prompt("Error"));
    }
    tipo = prompt("Ingrese tipo");
		while( tipo != 'solido' && tipo != 'liquido'){
			tipo = prompt("invalido ingrese tipo");
		}
    acumuladorPeso += peso;

    if(tipo == "liquido"){

      if(flagLiquido == 0 || precio > precioLiquidoCaro){
        precioLiquidoCaro = precio;
        marcaLiquidoCaro = marca;
        flagLiquido = 1;
      }

    }
    else{

      if(flagSolido == 0 || peso > pesoSolidoLiviano){
        pesoSolidoLiviano = peso;
        marcaSolidoLiviano = marca;
        flagSolido = 1;
      }

    }

    seguir = prompt("Quiere ingresar otro producto?: ");
  }while( seguir == 's');

  console.log("Peso total de toda la compra " + acumuladorPeso + "kg");
  if (flagLiquido == 0){
    console.log("no se ingresaron liquidos");
  }
  else{
  console.log("liquido más caro. marca " + marcaLiquidoCaro + " precio $" + precioLiquidoCaro);
  }
  if(flagSolido == 0){
    console.log("no se ingresaron solidos");
  }
  else{
  console.log("Solido liviano. marca " + marcaSolidoLiviano + " peso " + pesoSolidoLiviano + "kg");
  }




}
