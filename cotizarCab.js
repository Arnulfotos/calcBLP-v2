import {
  MAX_PERSONAS_CABANA,
  PRECIO_CABANA,
  PERSONA_EXTRA_CABANA,
  AUTO_EXTRA_CABANA,
  AUTOS_CABANA,
  PERSONAS_CABANA,
} from "./politicasyprecios";
import { wordFormater } from "./wordFormater";
import { printCot, endCot } from "./DOMoperators";
import { calcDia } from "./calcDia";
import { setDates } from "./setDates";



let cotizarCabanas = (e) => {
  const cotizacion = document.getElementById("cotizacion");
const totalInput = document.getElementById("total");
  const numDePersonas = document.getElementById("num-personas").value;
  const numDeAutos = document.getElementById("auto").value;
  const diasEnCabana = document.getElementById("dias-encabana").value;
  const cabanas = document.getElementById("numero-cabanas").value;
  const dias = document.getElementById("entrada-general").value;

  let cotEGeneral = calcDia(numDePersonas, dias);

  let cotCab = (...args) => {
    console.log(...args);
    if (args[0] > MAX_PERSONAS_CABANA * cabanas) {
      return [0,"Maximo permitido de personas por cabaña es de 6"];
    } else {
      let totalCab = cabanas * diasEnCabana * PRECIO_CABANA;
      let palabrasFormateadas = wordFormater(
        diasEnCabana,
        numDePersonas,
        numDeAutos,
        0,
        cabanas
      );

      if (numDePersonas > PERSONAS_CABANA * cabanas) {
        console.log(numDePersonas);

        let personaExtra = numDePersonas - PERSONAS_CABANA * cabanas;

        console.log(personaExtra);

        totalCab += PERSONA_EXTRA_CABANA * personaExtra * diasEnCabana;
      }

      if (numDeAutos > AUTOS_CABANA * cabanas) {

        let autoExtra = numDeAutos - (AUTOS_CABANA * cabanas);

        console.log(autoExtra);
  
        totalCab += AUTO_EXTRA_CABANA * autoExtra * diasEnCabana;
      }

    

      return [
        totalCab,
        `El total por ${cabanas} ${palabrasFormateadas.cabaña} por ${diasEnCabana} ${palabrasFormateadas.dia} para ${numDePersonas} ${palabrasFormateadas.persona} y ${numDeAutos} ${palabrasFormateadas.auto} es de $${totalCab} pesos por un horario de 12 p.m. a 11 a.m.`,
      ];
    }
  };

  console.log(numDePersonas, numDeAutos, diasEnCabana, cabanas);
  let cotizacionText = cotCab(numDePersonas, numDeAutos, diasEnCabana, cabanas);

  printCot(cotizacionText[1], cotizacion);
  if (dias) {
    totalCab += cotEGeneral[0];
    printCot(cotEGeneral[1], cotizacion);
  }
  endCot(cotizacion);

  totalInput.value = cotizacionText[0];
  setDates(12,diasEnCabana, 0)
  e.preventDefault();
};

export { cotizarCabanas };
