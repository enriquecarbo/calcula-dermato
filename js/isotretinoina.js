// Eventos para los botones

	calcular = function(e){
  
	var peso = document.getElementById("peso").value;
	var dias = document.getElementById("dias").value;
	var dosis = document.getElementById("dosis").value;
	var res = parseFloat(dosis) * parseFloat(dias) / parseFloat(peso); 
  
	document.getElementById("resultado").value= res;
	}

	borrar = function(e){
		document.getElementById("resultado").value = null;
		document.getElementById("peso").value = null;
		document.getElementById("dias").value = null;
		document.getElementById("dosis").value = null;
    document.getElementById("resultado").value= null;
	}
