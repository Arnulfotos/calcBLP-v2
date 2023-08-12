export function fecha() {

    let date = new Date();

    let currentDate = `Fecha: ${date.getDate()}/${date.getMonth() + 1
      }/${date.getFullYear()}`;
    
    document.getElementById("d1").innerHTML = currentDate;
    
    let currentYear = `&copy; Arnulfotos ${date.getFullYear()}`
    
    document.getElementById("copyright").innerHTML = currentYear;
    


}



