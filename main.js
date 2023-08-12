import { fecha } from "./dia";
/* import { calcNoc } from "./calcNoc"; */

const PRECIO_ENTRADA_GENERAL = 105;
const PRECIO_CAMPING = 400;
const EXTRA_CAMPING = 85;

const PERSONAS_AUTO = 5;

const dias = document.getElementById("entrada-general").value;
const camping = document.getElementById("camping").value;
const numDePersonas = document.getElementById("num-personas").value;
const numDeAutos = document.getElementById("auto").value;

fecha();


function calcNoc(camping,numDePersonas,numDeAutos) {


  if ( (numDeAutos * PERSONAS_AUTO) < numDePersonas) {
  
      let personasExtras = numDePersonas - PERSONAS_AUTO;
      let cotNoc = ((personasExtras * EXTRA_CAMPING) + (PRECIO_CAMPING * numDeAutos));
      let total = cotNoc * camping;
      console.log(total)

  } else {
      let total = PRECIO_CAMPING * numDeAutos * camping;
      console.log(total)

  }
  
  
  
  };





