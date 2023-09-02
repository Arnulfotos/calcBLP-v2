let numCot = 0;

let printCot = (cot, domElement) => {
    let p = document.createElement("p");
    numCot += 1
    p.setAttribute('id', `${numCot}`)
    let text = document.createTextNode(cot);
    p.appendChild(text);
  
    domElement.appendChild(p);
  };

  let endCot = (domElement) => {
    let br = document.createElement("br");
  let hr = document.createElement("hr");
  domElement.appendChild(br);
  domElement.appendChild(hr);
  }

  export {printCot, endCot}