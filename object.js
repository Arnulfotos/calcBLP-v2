btnCotizar.addEventListener("click", (e) => {
const numDePersonas = document.getElementById("num-personas").value;
const numDeAutos = document.getElementById("auto").value;
const diasEnCabana = document.getElementById("dias-encabana").value
const cabanas = document.getElementById("numero-cabanas").value
const cotizacion = document.getElementById("cotizacion");
const totalInput = document.getElementById("total");


let objCotizacion = {
        cabana: {
            elemento: 'cabaña',
            cantidad: cabanas,
            dias: diasEnCabana,
            numPersonas: numDePersonas,
            persona: 'personas',
        }
    
}

console.log(objCotizacion.cabana)

e.preventDefault();

});