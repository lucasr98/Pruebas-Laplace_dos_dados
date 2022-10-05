const input = document.getElementById("tiradas");
const boton = document.getElementById("boton");
const listaNumeros = document.getElementById("grilla");
const botonPorcentaje = document.getElementById("porcentaje");
const botonCantidad = document.getElementById("cantidad");

const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const tres = document.getElementById("tres");
const cuatro = document.getElementById("cuatro");
const cinco = document.getElementById("cinco");
const seis = document.getElementById("seis");
const siete = document.getElementById("siete");
const ocho = document.getElementById("ocho");
const nueve = document.getElementById("nueve");
const diez = document.getElementById("diez");
const once = document.getElementById("once");
const doce = document.getElementById("doce");

const unoP = document.getElementById("unoP");
const dosP = document.getElementById("dosP");
const tresP = document.getElementById("tresP");
const cuatroP = document.getElementById("cuatroP");
const cincoP = document.getElementById("cincoP");
const seisP = document.getElementById("seisP");
const sieteP = document.getElementById("sieteP");
const ochoP = document.getElementById("ochoP");
const nueveP = document.getElementById("nueveP");
const diezP = document.getElementById("diezP");
const onceP = document.getElementById("onceP");
const doceP = document.getElementById("doceP");

let dosPorcentaje = 0;
let tresPorcentaje = 0;
let cuatroPorcentaje = 0;
let cincoPorcentaje = 0;
let seisPorcentaje = 0;
let sietePorcentaje = 0;
let ochoPorcentaje = 0;
let nuevePorcentaje = 0;
let diezPorcentaje = 0;
let oncePorcentaje = 0;
let docePorcentaje = 0;

class Dados{
	constructor(inicio, fin){
		this.inicio = inicio;
		this.fin = fin;
	}
}

const dado1 = new Dados(1, 6);
const dado2 = new Dados(1, 6);

let total = 0;

let contador = 0;

dosP.innerHTML = "0%";
tresP.innerHTML = "0%";
cuatroP.innerHTML = "0%";
cincoP.innerHTML = "0%";
seisP.innerHTML = "0%";
sieteP.innerHTML = "0%";
ochoP.innerHTML = "0%";
nueveP.innerHTML = "0%";
diezP.innerHTML = "0%";
onceP.innerHTML = "0%";
doceP.innerHTML = "0%";

document.addEventListener('click', (e) => {
	const numeros = e.target;

	document.getElementById("2").style.removeProperty("background-color");
	document.getElementById("3").style.removeProperty("background-color");
	document.getElementById("4").style.removeProperty("background-color");
	document.getElementById("5").style.removeProperty("background-color");
	document.getElementById("6").style.removeProperty("background-color");
	document.getElementById("7").style.removeProperty("background-color");
	document.getElementById("8").style.removeProperty("background-color");
	document.getElementById("9").style.removeProperty("background-color");
	document.getElementById("10").style.removeProperty("background-color");
	document.getElementById("11").style.removeProperty("background-color");
	document.getElementById("12").style.removeProperty("background-color");

	dos.style.removeProperty("background-color");
	tres.style.removeProperty("background-color");
	cuatro.style.removeProperty("background-color");
	cinco.style.removeProperty("background-color");
	seis.style.removeProperty("background-color");
	siete.style.removeProperty("background-color");
	ocho.style.removeProperty("background-color");
	nueve.style.removeProperty("background-color");
	diez.style.removeProperty("background-color");
	once.style.removeProperty("background-color");
	doce.style.removeProperty("background-color");

	if(numeros.classList.contains('dos-number') || numeros.id === '2') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.backgroundColor = "transparent";
	    	children[i].style.border = ".05rem solid var(--color-c2)";
		    if(children[i].className === 'dos-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("2").style.backgroundColor = "var(--color-c1)";
		dos.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'tres-number' || numeros.id === '3') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'tres-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("3").style.backgroundColor = "var(--color-c1)";
		tres.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'cuatro-number' || numeros.id === '4') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'cuatro-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("4").style.backgroundColor = "var(--color-c1)";
		cuatro.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'cinco-number' || numeros.id === '5') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'cinco-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("5").style.backgroundColor = "var(--color-c1)";
		cinco.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'seis-number' || numeros.id === '6') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'seis-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("6").style.backgroundColor = "var(--color-c1)";
		seis.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'siete-number' || numeros.id === '7') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'siete-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("7").style.backgroundColor = "var(--color-c1)";
		siete.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'ocho-number' || numeros.id === '8') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'ocho-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("8").style.backgroundColor = "var(--color-c1)";
		ocho.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'nueve-number' || numeros.id === '9') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'nueve-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("9").style.backgroundColor = "var(--color-c1)";
		nueve.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'diez-number' || numeros.id === '10') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'diez-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("10").style.backgroundColor = "var(--color-c1)";
		diez.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'once-number' || numeros.id === '11') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'once-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("11").style.backgroundColor = "var(--color-c1)";
		once.style.backgroundColor = "var(--color-c1)";
	}
	else if(numeros.className === 'doce-number' || numeros.id === '12') {
		if (listaNumeros.hasChildNodes()) {
		  var children = listaNumeros.childNodes;
		  for (var i = 0; i < children.length; i++) {
	    	children[i].style.removeProperty("background-color");
	    	children[i].style.removeProperty("border");
		    if(children[i].className === 'doce-number'){
		    	children[i].style.backgroundColor = "var(--color-c1)";
		    	children[i].style.border = ".05rem solid var(--color-c1)";
		    }
		  }
		}
		document.getElementById("12").style.backgroundColor = "var(--color-c1)";
		doce.style.backgroundColor = "var(--color-c1)";
	}
})

boton.addEventListener("click", tirarDados);
input.addEventListener("keypress", (e)=> {if (e.key == 'Enter') {return tirarDados()}});

botonPorcentaje.addEventListener("click", ()=> {
	contador = 0;
	return numeroPorcentaje();
} );

botonCantidad.addEventListener("click", ()=> {
	contador = 1;
	return numeroPorcentaje();
} );

function numeroPorcentaje(){
	if (contador == 0) {
		botonPorcentaje.style.backgroundColor = "var(--color-c1)";
		botonPorcentaje.style.color = "#fff";
		botonCantidad.style.removeProperty("background-color");
		botonCantidad.style.removeProperty("color");
		dosP.innerHTML = `${Math.round((dosPorcentaje * 100) / total)}%`;
		tresP.innerHTML = `${Math.round((tresPorcentaje * 100) / total)}%`;
		cuatroP.innerHTML = `${Math.round((cuatroPorcentaje * 100) / total)}%`;
		cincoP.innerHTML = `${Math.round((cincoPorcentaje * 100) / total)}%`;
		seisP.innerHTML = `${Math.round((seisPorcentaje * 100) / total)}%`;
		sieteP.innerHTML = `${Math.round((sietePorcentaje * 100) / total)}%`;
		ochoP.innerHTML = `${Math.round((ochoPorcentaje * 100) / total)}%`;
		nueveP.innerHTML = `${Math.round((nuevePorcentaje * 100) / total)}%`;
		diezP.innerHTML = `${Math.round((diezPorcentaje * 100) / total)}%`;
		onceP.innerHTML = `${Math.round((oncePorcentaje * 100) / total)}%`;
		doceP.innerHTML = `${Math.round((docePorcentaje * 100) / total)}%`;
	}
	else if (contador == 1) {
		botonCantidad.style.backgroundColor = "var(--color-c1)";
		botonCantidad.style.color = "#fff";
		botonPorcentaje.style.removeProperty("background-color");
		botonPorcentaje.style.removeProperty("color");
		dosP.innerHTML = `${dosPorcentaje}`;
		tresP.innerHTML = `${tresPorcentaje}`;
		cuatroP.innerHTML = `${cuatroPorcentaje}`;
		cincoP.innerHTML = `${cincoPorcentaje}`;
		seisP.innerHTML = `${seisPorcentaje}`;
		sieteP.innerHTML = `${sietePorcentaje}`;
		ochoP.innerHTML = `${ochoPorcentaje}`;
		nueveP.innerHTML = `${nuevePorcentaje}`;
		diezP.innerHTML = `${diezPorcentaje}`;
		onceP.innerHTML = `${oncePorcentaje}`;
		doceP.innerHTML = `${docePorcentaje}`;
	}
}

function tirarDados(){

	dosPorcentaje = 0;
	tresPorcentaje = 0;
	cuatroPorcentaje = 0;
	cincoPorcentaje = 0;
	seisPorcentaje = 0;
	sietePorcentaje = 0;
	ochoPorcentaje = 0;
	nuevePorcentaje = 0;
	diezPorcentaje = 0;
	oncePorcentaje = 0;
	docePorcentaje = 0;

	dos.style.height = "0";
	tres.style.height = "0";
	cuatro.style.height = "0";
	cinco.style.height = "0";
	seis.style.height = "0";
	siete.style.height = "0";
	ocho.style.height = "0";
	nueve.style.height = "0";
	diez.style.height = "0";
	once.style.height = "0";
	doce.style.height = "0";

	total = input.value;

	while (listaNumeros.firstChild) {
	  listaNumeros.removeChild(listaNumeros.firstChild);
	}

	for (var i = 0; i < total; i++){

		let valorAleatorio1 = dado1.inicio + Math.floor(Math.random() * dado1.fin);
		let valorAleatorio2 = dado2.inicio + Math.floor(Math.random() * dado2.fin);

		let itemNumeros = document.createElement("p");
		let itemNumero = document.createElement("p");
		let item = document.createElement("li");
		itemNumeros.innerHTML = `con un ${valorAleatorio1} y un ${valorAleatorio2}`;
		itemNumero.innerHTML = `${valorAleatorio1 + valorAleatorio2}`;
		item.appendChild(itemNumero);
		item.appendChild(itemNumeros);
		listaNumeros.appendChild(item);

		if ((valorAleatorio1 + valorAleatorio2) == 2) {
			dosPorcentaje++;
			dos.style.height = `${(Math.log((dosPorcentaje * 100) / total)) * 20}%`;
			item.className = "dos-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 3) {
			tresPorcentaje++;
			tres.style.height = `${(Math.log((tresPorcentaje * 100) / total)) * 20}%`;
			item.className = "tres-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 4) {
			cuatroPorcentaje++;
			cuatro.style.height = `${(Math.log((cuatroPorcentaje * 100) / total)) * 20}%`;
			item.className = "cuatro-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 5) {
			cincoPorcentaje++;
			cinco.style.height = `${(Math.log((cincoPorcentaje * 100) / total)) * 20}%`;
			item.className = "cinco-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 6) {
			seisPorcentaje++;
			seis.style.height = `${(Math.log((seisPorcentaje * 100) / total)) * 20}%`;
			item.className = "seis-number";
		}
		if ((valorAleatorio1 + valorAleatorio2) == 7) {
			sietePorcentaje++;
			siete.style.height = `${(Math.log((sietePorcentaje * 100) / total)) * 20}%`;
			item.className = "siete-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 8) {
			ochoPorcentaje++;
			ocho.style.height = `${(Math.log((ochoPorcentaje * 100) / total)) * 20}%`;
			item.className = "ocho-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 9) {
			nuevePorcentaje++;
			nueve.style.height = `${(Math.log((nuevePorcentaje * 100) / total)) * 20}%`;
			item.className = "nueve-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 10) {
			diezPorcentaje++;
			diez.style.height = `${(Math.log((diezPorcentaje * 100) / total)) * 20}%`;
			item.className = "diez-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 11) {
			oncePorcentaje++;
			once.style.height = `${(Math.log((oncePorcentaje * 100) / total)) * 20}%`;
			item.className = "once-number";
		}
		else if ((valorAleatorio1 + valorAleatorio2) == 12) {
			docePorcentaje++;
			doce.style.height = `${(Math.log((docePorcentaje * 100) / total)) * 20}%`;
			item.className = "doce-number";
		}
	}

	return numeroPorcentaje();

}

tirarDados();