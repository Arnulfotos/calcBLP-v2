import { fecha } from "./dia";
import { cotizarCabanas } from "./cotizarCab";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import { cotizarCampingyEntrada } from "./cotizarCampingyEntrada";
import { diaHoras, nocheHoras } from "./politicasyprecios";
import { calcDia } from "./calcDia";
import { printCot, endCot } from "./DOMoperators";
import { setDates } from "./setDates";



const camping = document.getElementById("camping");
const numDePersonas = document.getElementById("num-personas");
const numDeAutos = document.getElementById("auto");
const diasEnCabana = document.getElementById("dias-encabana");
const cabanas = document.getElementById("numero-cabanas");
const dias = document.getElementById("entrada-general");
const totalInput = document.getElementById("total");
const nombre = document.getElementById('nombre')

const diaSalida = document.getElementById("salida");
const diaEntrada = document.getElementById("entrada");

camping.value = 1
numDeAutos.value = 1
numDePersonas.value = 5
dias.value = 1

const btnCotizar = document.getElementById("calc");
const img = document.getElementById("img");

const selectService = document.getElementById("tipo-servicio");
const diasCabContainer = document.getElementById("dias-cabana");
const cabContainer = document.getElementById("num-cabana");
const eGeneralContainer = document.getElementById("egeneral");
const campingContainer = document.getElementById("campingCont");
const diaExtraCont = document.getElementById('diaExtraCont')

let delBut = document.getElementById('delete')

diasCabContainer.style.display = "none";
cabContainer.style.display = "none";
eGeneralContainer.style.display = "unset";
campingContainer.style.display = "unset";
diaExtraCont.style.display = "none"


/* numDePersonas.value = "";
numDeAutos.value = "";
diasEnCabana.value = "";
cabanas.value = "";
dias.value = "";
camping.value = ""; */






diaEntrada.addEventListener('change', () => {

  function addHours(date, hours) {
    let result = new Date(date);
    result.setTime(result.getTime() + hours * 60 * 60 * 1000);
    return result;
  }

  let calcularHoras = diaHoras * parseInt(dias.value) + nocheHoras * parseInt(camping.value);
  console.log(diaEntrada.value)
  console.log(calcularHoras)

  let fechaSalida = addHours(diaEntrada.value, calcularHoras);
  console.log(fechaSalida);
  /* yyyy-MM-ddThh:mm */

  let inputSalida = `${fechaSalida.getFullYear()}-${(
    "0" +
    (fechaSalida.getMonth() + 1)
  ).slice(-2)}-${("0" + fechaSalida.getDate()).slice(-2)}T${(
    "0" + fechaSalida.getHours()
  ).slice(-2)}:00`;

  diaSalida.value = inputSalida;


})




document.addEventListener("wheel", function(event) {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
});


let removeDiaExtra = (currentCot) => {

  let diaExtra = currentCot.firstChild.nextSibling
  let total = diaExtra.nextSibling

  currentCot.removeChild(diaExtra)
  currentCot.removeChild(total)

  console.log(diaExtra, total)

}
let previousValue = []
diaExtraCont.addEventListener('change', (e) => {

  console.log(previousValue)

  let currentCot = document.getElementById('1')


  if (!currentCot) {
    cotizarCabanas(e);
  }

  if (e.target.checked) {

    let currentCot = document.getElementById('1')

    let cotEGeneral = calcDia(numDePersonas.value, 1);

    printCot(cotEGeneral[1], currentCot)

    let calcTotal = ` El total a pagar es de ${parseInt(totalInput.value) + cotEGeneral[0]
      } pesos`;

    printCot(calcTotal, currentCot)
    previousValue.push(totalInput.value)

    totalInput.value = parseInt(totalInput.value) + cotEGeneral[0]
    previousValue.push(diaSalida.value)


    function addHours(date, hours) {
      let result = new Date(date);
      result.setTime(result.getTime() + hours * 60 * 60 * 1000);
      return result;
    }

    let fechaSalida = addHours(diaSalida.value, 7)
    let inputSalida = `${fechaSalida.getFullYear()}-${(
      "0" +
      (fechaSalida.getMonth() + 1)
    ).slice(-2)}-${("0" + fechaSalida.getDate()).slice(-2)}T${(
      "0" + fechaSalida.getHours()
    ).slice(-2)}:00`;

    diaSalida.value = inputSalida;



  } else {

    removeDiaExtra(currentCot);
    totalInput.value = previousValue[0]
    diaSalida.value = previousValue[1]



  }


})

// Selecciona Servicio
selectService.addEventListener("change", (e) => {
  numDePersonas.value = "";
  numDeAutos.value = "";
  diasEnCabana.value = "";
  cabanas.value = "";
  dias.value = "";
  camping.value = "";


  switch (e.target.value) {
    case "egeneral-y-camping":
      diasCabContainer.style.display = "none";
      cabContainer.style.display = "none";
      eGeneralContainer.style.display = "unset";
      campingContainer.style.display = "unset";
      diaExtraCont.style.display = "none"

      break;

    case "cabana":
      eGeneralContainer.style.display = "none";
      campingContainer.style.display = "none";
      diaExtraCont.style.display = "flex"
      diasCabContainer.style.display = "unset";
      cabContainer.style.display = "unset";


      break;
  }
});

//Agregar fecha
fecha();

/*document.body.addEventListener( 'click', function ( event ) {
  if( event.target.id == 'delete' ) {
    let cotizacion = event.target.parentNode
console.log(cotizacion.parentNode)

    let imgBody = document.getElementById('img-body')
    imgBody.removeChild(cotizacion)

    let div = document.createElement('div')
    div.setAttribute('id', 'cotizacion')
    imgBody.appendChild(div)
   
  };

    if (event.target.id == 'calc') {

  switch (selectService.value) {
    case "egeneral-y-camping":
      cotizarCampingyEntrada(event);


      break;

    case "cabana":
      cotizarCabanas(event);

      break;
    }


}

event.preventDefault();
});
*/

//Cotizar


//Crea ticket
img.addEventListener("click", (e) => {

  let date = new Date();
  diaExtraCont.style.display = "none"



  const imgBody = document.getElementById("img-body");
  htmlToImage.toPng(imgBody, {}).then(function(dataUrl) {
    download(dataUrl, `${date.toISOString()}-${nombre.value || "reservacion-blp"}.png`);
  });

  e.preventDefault();
});

btnCotizar.addEventListener('click', (e) => {
  switch (selectService.value) {
    case "egeneral-y-camping":
      cotizarCampingyEntrada(e);


      break;

    case "cabana":
      cotizarCabanas(e);

      break;
  }

  e.preventDefault()
})
