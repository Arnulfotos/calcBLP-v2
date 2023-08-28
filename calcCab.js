import {MAX_PERSONAS_CABANA, PRECIO_CABANA, PERSONA_EXTRA_CABANA, AUTO_EXTRA_CABANA, AUTOS_CABANA, PERSONAS_CABANA} from "./politicasyprecios";
import { wordFormater } from "./wordFormater";

let cotizarCabanas = (e) => {
    const numDePersonas = document.getElementById("num-personas").value;
    const numDeAutos = document.getElementById("auto").value;
    const diasEnCabana = document.getElementById("dias-encabana").value
    const cabanas = document.getElementById("numero-cabanas").value
  
  
  
    let cotCab = (...args) => {
      console.log(...args)
        if (args[0] > (MAX_PERSONAS_CABANA * cabanas)) {
          console.log("Maximo permitido de personas por cabaña es de 6")
        } else {
              
            let totalCab = cabanas * diasEnCabana * PRECIO_CABANA

            if(numDePersonas > (PERSONAS_CABANA * cabanas)) {
                console.log(numDePersonas)

                let personaExtra = numDePersonas - (PERSONAS_CABANA * cabanas) 

                console.log(personaExtra)
                
                totalCab += PERSONA_EXTRA_CABANA * personaExtra * diasEnCabana
            }

            if(numDeAutos > (AUTOS_CABANA * cabanas)) {
                totalCab += AUTO_EXTRA_CABANA * (numDeAutos - AUTOS_CABANA) * diasEnCabana
            }

            console.log(totalCab)

            

  
        }
    }
  
    cotCab(numDePersonas, numDeAutos, diasEnCabana, cabanas)
  
  
  
  
    /* totalInput.value = */ 
    e.preventDefault();
  
  }

  export {cotizarCabanas}