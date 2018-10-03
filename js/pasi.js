// Eventos para los botones

	calcular = function(e){

	//Cabeza y cuello
  
	var eritemacc = document.getElementById("eritemacc").value;
	var escamacc = document.getElementById("escamacc").value;
	var induracc = document.getElementById("induracc").value;
	var supcc = document.getElementById("supcc").value;
	var areacc;

	if (supcc == 0){
		areacc = 0;
	} else if (supcc > 0 && supcc < 1){
		areacc = 1;
	} else if (supcc >= 1 && supcc < 3){
		areacc = 2;
	} else if (supcc >= 3 && supcc < 5){
		areacc = 3;
	} else if (supcc >= 5 && supcc < 7){
		areacc = 4;
	} else if (supcc >= 7 && supcc < 9){
		areacc = 5;
	} else {
		areacc = 6;
	}

	// Resultado CC

	var rescc = (parseInt(eritemacc) + parseInt(escamacc) + parseInt(induracc)) * areacc * 0.1; 
  
	// Miembros Superiores

	var eritemams = document.getElementById("eritemams").value;
	var escamams = document.getElementById("escamams").value;
	var indurams = document.getElementById("indurams").value;
	var supms = document.getElementById("supms").value;
	var areams;

	if (supms == 0){
		areams = 0;
	} else if (supms > 0 && supms < 2){
		areams = 1;
	} else if (supms >= 2 && supms < 6){
		areams = 2;
	} else if (supms >= 6 && supms < 10){
		areams = 3;
	} else if (supms >= 10 && supms < 14){
		areams = 4;
	} else if (supms >= 14 && supms < 18){
		areams = 5;
	} else {
		areams = 6;
	}

	//Resultado Miembros superiores

	var resms = (parseInt(eritemams) + parseInt(escamams) + parseInt(indurams)) * areams * 0.2; 

	//Tronco

	var eritemat = document.getElementById("eritemat").value;
	var escamat = document.getElementById("escamat").value;
	var indurat = document.getElementById("indurat").value;
	var supt = document.getElementById("supt").value;
	var areat;

	if (supt == 0){
		areat = 0;
	} else if (supt > 0 && supt < 3){
		areat = 1;
	} else if (supt >= 3 && supt < 9){
		areat = 2;
	} else if (supt >= 9 && supt < 15){
		areat = 3;
	} else if (supt >= 15 && supt < 21){
		areat = 4;
	} else if (supt >= 21 && supt < 27){
		areat = 5;
	} else {
		areat = 6;
	}

	//Resultado Tronco

	var rest = (parseInt(eritemat) + parseInt(escamat) + parseInt(indurat)) * areat * 0.3; 

	// Miembros Inferiores

	var eritemami = document.getElementById("eritemami").value;
	var escamami = document.getElementById("escamami").value;
	var indurami = document.getElementById("indurami").value;
	var supmi = document.getElementById("supmi").value;
	var areami;

	if (supmi == 0){
		areami = 0;
	} else if (supmi > 0 && supmi < 4){
		areami = 1;
	} else if (supmi >= 4 && supmi < 12){
		areami = 2;
	} else if (supmi >= 12 && supmi < 20){
		areami = 3;
	} else if (supmi >= 20 && supmi < 28){
		areami = 4;
	} else if (supmi >= 28 && supmi < 36){
		areami = 5;
	} else {
		areami = 6;
	}

	//Resultado Miembros superiores

	var resmi = (parseInt(eritemami) + parseInt(escamami) + parseInt(indurami)) * areami * 0.4; 

	// Resultado final PASI

	var res = rescc + resms + rest + resmi 

	document.getElementById("resultadocc").value= rescc;
	document.getElementById("resultadoms").value= resms;
	document.getElementById("resultadot").value= rest;
	document.getElementById("resultadomi").value= resmi;
	document.getElementById("resultado").value= res;
	}



	borrar = function(e){
		//Cabeza y cuello

		document.getElementById("eritemacc").value = null;
		document.getElementById("escamacc").value = null;
		document.getElementById("induracc").value = null;
		document.getElementById("supcc").value = null;

		//Miembros superiores

		document.getElementById("eritemams").value = null;
		document.getElementById("escamams").value = null;
		document.getElementById("indurams").value = null;
		document.getElementById("supms").value = null;

		//Tronco

		document.getElementById("eritemat").value = null;
		document.getElementById("escamat").value = null;
		document.getElementById("indurat").value = null;
		document.getElementById("supt").value = null;

		//Miembros Inferiores

		document.getElementById("eritemami").value = null;
		document.getElementById("escamami").value = null;
		document.getElementById("indurami").value = null;
		document.getElementById("supmi").value = null;


	document.getElementById("resultadocc").value= null;	
	document.getElementById("resultadoms").value= null;
	document.getElementById("resultadot").value= null;
	document.getElementById("resultadomi").value= null;
    document.getElementById("resultado").value= null;
	}
