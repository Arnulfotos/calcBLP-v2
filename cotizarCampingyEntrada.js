import { calcNoc } from "./calcNoc";
import { calcDia } from "./calcDia";
import { printCot, endCot } from "./DOMoperators";
import { fecha } from "./dia";
import { setDates } from "./setDates";
import { addDelete } from "./addDelete";


let cotizarCampingyEntrada = (e) => {
  const cotizacion = document.getElementById("cotizacion");
  const totalInput = document.getElementById("total");
  
  

  const numDePersonas = document.getElementById("num-personas").value;
  const numDeAutos = document.getElementById("auto").value;
  const dias = document.getElementById("entrada-general").value;
  const camping = document.getElementById("camping").value;

  let cotCamping = calcNoc(camping, numDePersonas, numDeAutos);
  if(cotCamping[0] > 0){
    printCot(cotCamping[1], cotizacion);
  }




  let cotEGeneral = calcDia(numDePersonas, dias);
  if (cotEGeneral[0] > 0) {
    printCot(cotEGeneral[1], cotizacion);
  }
  


  let calcTotal = ` El total a pagar es de ${
    cotCamping[0] + cotEGeneral[0]
  } pesos`;

  printCot(calcTotal, cotizacion);
  addDelete(cotizacion);
  endCot(cotizacion);

  totalInput.value = cotCamping[0] + cotEGeneral[0];

  if(camping > dias) {
    setDates(18, dias, camping)
  } else {
    setDates(9, dias, camping)
  }






  e.preventDefault();

};

export { cotizarCampingyEntrada };
