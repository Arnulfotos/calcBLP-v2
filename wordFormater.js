export function wordFormater(dias, numDePersonas, numDeAutos, camping) {
let i;
let valores = [dias, numDePersonas, numDeAutos, camping]

let palabrasSingulares = ["dia", "persona", "auto", "noche"]
let palabrasSingulares2 = [...palabrasSingulares]

for (i = 0; i < palabrasSingulares2.length; i++) {

  if (valores[i] > 1) {
    palabrasSingulares2[i] += "s"
  }

}



const datoTextoCalc = {}

palabrasSingulares.forEach((element, index) => {
  datoTextoCalc[element] = palabrasSingulares2[index];
});

return datoTextoCalc
}