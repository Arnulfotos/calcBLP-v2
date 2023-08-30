import { calcNoc } from "./calcNoc";
import { calcDia } from "./calcDia";
import { fecha } from "./dia";
import { printCot, endCot } from "./DOMoperators";
import { cotizarCabanas } from "./calcCab";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";




const btnCotizar = document.getElementById("calc");
const img = document.getElementById("img");
const cotizacion = document.getElementById("cotizacion");
const totalInput = document.getElementById("total");

/* 
const wrapper = document.getElementsByClassName('form-wrapper')[0]
const deleteCot = document.querySelector('delete'); */


/* const dias = document.getElementById("entrada-general").value = 1
const camping = document.getElementById("camping")
camping.value = 1
const numDePersonas = document.getElementById("num-personas").value = 5
const numDeAutos = document.getElementById("auto").value = 1 */

let addDelete = (domElement) => {
  let button = document.createElement("button");
  let text = document.createTextNode('eliminar');
  button.appendChild(text);

  button.setAttribute('class', 'delete')





  domElement.appendChild(button); 
  let br = document.createElement("br");
    domElement.appendChild(br);

}





let cotizarCampingyEntrada = (e) => {
  const dias = document.getElementById("entrada-general").value;
  const camping = document.getElementById("camping").value;
  const numDePersonas = document.getElementById("num-personas").value;
  const numDeAutos = document.getElementById("auto").value;

  let cotCamping = calcNoc(camping, numDePersonas, numDeAutos);
  let cotEGeneral = calcDia(numDePersonas, dias);
  let calcTotal = ` El total a pagar es de ${
    cotCamping[0] + cotEGeneral[0]
  } pesos`;


printCot(cotCamping[1], cotizacion);
    printCot(cotEGeneral[1], cotizacion);
  printCot(calcTotal, cotizacion);
 /* addDelete(cotizacion); */
 endCot(cotizacion);
  

  totalInput.value = cotCamping[0] + cotEGeneral[0];
  e.preventDefault();

}




fecha();
btnCotizar.addEventListener("click", (e) => {

  if (camping.value) {
    cotizarCampingyEntrada(e);

  } else {
    cotizarCabanas(e);

  }


  
});

camping.addEventListener('blur', ()=>{
  console.log('hola')
})

img.addEventListener("click", (e) => {

  /* htmlToImage.toJpeg(wrapper, { quality: 0.95 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'my-image-name.jpeg';
    link.href = dataUrl;
    link.click();
  }); */
  /* const wrapper = document.getElementsByClassName('form-wrapper')[0] */
  const imgBody = document.getElementById('img-body')
  htmlToImage.toPng(imgBody, {})
  .then(function (dataUrl) {
    download(dataUrl, 'my-node.png');
  });

  e.preventDefault();

})




