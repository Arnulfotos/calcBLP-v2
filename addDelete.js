let addDelete = (domElement) => {
    let button = document.createElement("button");
    let text = document.createTextNode("eliminar");
    button.appendChild(text);
  
    button.setAttribute("class", "delete");
    button.setAttribute('id', 'delete')
  
    domElement.appendChild(button);
    let br = document.createElement("br");
    domElement.appendChild(br);
  };

  export {addDelete}