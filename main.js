import { calcNoc } from "./calcNoc";
import { fecha } from "./dia";




const dias = document.getElementById("entrada-general").value;
const camping = document.getElementById("camping").value;
const numDePersonas = document.getElementById("num-personas").value;
const numDeAutos = document.getElementById("auto").value;

fecha();

calcNoc(2,18,3);

