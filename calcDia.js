import { wordFormater } from "./wordFormater";

/* import { PRECIO_CAMPING, PERSONAS_AUTO, EXTRA_CAMPING } from "./main" */

/*Modules can import other modules, and those modules can import other modules, and so on. This forms a directed graph called the "dependency graph". In an ideal world, this graph is acyclic. In this case, the graph can be evaluated using a depth-first traversal. */

import {PRECIO_ENTRADA_GENERAL} from "./politicasyprecios";

function calcDia(numDePersonas, dias) {

    let palabrasFormateadas = wordFormater(dias,numDePersonas,0,0)
    let totalDia = numDePersonas * PRECIO_ENTRADA_GENERAL * dias

    let cotizacionText = `El total por ${numDePersonas} ${palabrasFormateadas.persona} para ${dias} ${palabrasFormateadas.dia} es de ${totalDia} pesos por un horario de 9 a.m. a 6 p.m.`

        return [totalDia, cotizacionText]
    };

    export {calcDia}
  
  