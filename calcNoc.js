import { wordFormater } from "./wordFormater";

/* import { PRECIO_CAMPING, PERSONAS_AUTO, EXTRA_CAMPING } from "./main" */

/*Modules can import other modules, and those modules can import other modules, and so on. This forms a directed graph called the "dependency graph". In an ideal world, this graph is acyclic. In this case, the graph can be evaluated using a depth-first traversal. */

import {PRECIO_CAMPING, PERSONAS_AUTO, EXTRA_CAMPING} from "./politicasyprecios";

function calcNoc(camping,numDePersonas,numDeAutos) {

    if ( (numDeAutos * PERSONAS_AUTO) < numDePersonas) {
    
        let personasExtras = numDePersonas - (numDeAutos * PERSONAS_AUTO);
        console.log(personasExtras)
        let cotNoc = ((personasExtras * EXTRA_CAMPING) + (PRECIO_CAMPING * numDeAutos));
        let total = cotNoc * camping;
        console.log(total)
  
    } else {
        let total = PRECIO_CAMPING * numDeAutos * camping;
        console.log(total)
    }
        let palabrasFormateadas = wordFormater(0,numDePersonas,numDeAutos,camping)
        console.log(palabrasFormateadas)
    };

    export {calcNoc}
  
  