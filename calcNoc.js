import { wordFormater } from "./wordFormater";

/* import { PRECIO_CAMPING, PERSONAS_AUTO, EXTRA_CAMPING } from "./main" */

/*Modules can import other modules, and those modules can import other modules, and so on. This forms a directed graph called the "dependency graph". In an ideal world, this graph is acyclic. In this case, the graph can be evaluated using a depth-first traversal. */

import {PRECIO_CAMPING, PERSONAS_AUTO, EXTRA_CAMPING} from "./politicasyprecios";

function calcNoc(camping,numDePersonas,numDeAutos) {

    let personasExtras = numDePersonas - (numDeAutos * PERSONAS_AUTO);

    let cotNoc = ((personasExtras * EXTRA_CAMPING) + (PRECIO_CAMPING * numDeAutos));

    let total = ( (numDeAutos * PERSONAS_AUTO) < numDePersonas) 
    ? cotNoc * camping
    : PRECIO_CAMPING * numDeAutos * camping;

    let palabrasFormateadas = wordFormater(0,numDePersonas,numDeAutos,camping)
    let cotizacionText = `El total por ${numDeAutos} ${palabrasFormateadas.auto} con ${numDePersonas} ${palabrasFormateadas.persona} para ${camping} ${palabrasFormateadas.noche} es de ${total} pesos por un horario de 6 p.m. a 9 a.m.`
        
    return [total, cotizacionText]
    };

    export {calcNoc}
  
  