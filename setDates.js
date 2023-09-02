import { diaHoras, nocheHoras } from "./politicasyprecios";

let setDates = (initHours, dias, camping) => {

  const diaEntrada = document.getElementById("entrada");
  const diaSalida = document.getElementById("salida");
  const selectService = document.getElementById("tipo-servicio");

  function addHours(date, hours) {
    let result = new Date(date);
    result.setTime(result.getTime() + hours * 60 * 60 * 1000);
    return result;
  }

  let date = new Date();

  diaEntrada.value = `${date.toISOString().substring(0, 10)}T${("0" + initHours).slice(-2)}:00`;



  let calcularHoras

  switch(selectService.value) {
    case "egeneral-y-camping":
        calcularHoras = diaHoras * parseInt(dias || 0) + nocheHoras * parseInt(camping || 0);

      break;

    case "cabana":
        calcularHoras = 23 * parseInt(dias)
        if (dias > 1) {
            calcularHoras += 1
        }

  }


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
};

export { setDates };
