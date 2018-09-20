$ ( function (){
	alert("Hola Mundo")
	var resultado = document.getElementById("resultado").value;
	var peso = document.getElementById("peso").value;
	var dias = document.getElementById("dias").value;
	var dosis = document.getElementById("dosis").value;

// Eventos para los botones

calcular.onclick = function(e){
		calculo();
	}

borrar.onclick = function(e){
		peso = 0;
		dias = 0;
		dosis = 0;

	}

// Funcion calculo
function calculo(){
	var res = parseFloat(dosis) * parseFloat(dias) / parseFloat(peso); 
	resultado.textContent = res;

	}

})