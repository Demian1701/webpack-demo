import _ from "lodash";
import "./assets/css/style.css";

function component() {
  const element = document.createElement("div");

  const botonaso = document.createElement("button");
  botonaso.id = "botonaso";
  botonaso.textContent = "shadow?";
  element.appendChild(botonaso);
  const shadowContent = document.createElement("section");
  shadowContent.className = "shadow-content";
  shadowContent.attachShadow({ mode: "open" });
  element.appendChild(shadowContent);
  // var shadow = this.attachShadow({mode: 'open'});
  console.log(shadowContent);
  return element;
}

let documentaso = document.querySelector("#contentWrapper");
documentaso.appendChild(component());

let botonaso = document.querySelector("#botonaso");

botonaso.addEventListener("click", function createShadow() {
  var style = document.createElement('style');

  style.textContent = `
  #botonasoo{
    background-color:green;
  }
  p{
    color:yellow;
  }`;
  
  const shadowContent = document.querySelector(".shadow-content");
  // let shadow = shadowContent.attachShadow({ mode: "open" });
  shadowContent.appendChild(style);
  var para = document.createElement("p");
  para.textContent = "Hola";
  shadowContent.appendChild(para);
  const botonaso = document.createElement("button");
  botonaso.id = "botonasoo";
  botonaso.textContent = "shadoow?";
  shadowContent.appendChild(botonaso);
  // console.log(shadow);
  console.log(shadowContent);

  

  // var url =
  //   "https://ppintel.s3-sa-east-1.amazonaws.com/assets/1228_LARDigital_Q320/7924/preview-6/index.html";
  // var url =
  //   "https://s3-sa-east-1.amazonaws.com/intel.iot.site/html/8471_IOT/index.html";

  // fetch("http://localhost:5000/lacuracao.html")
  //   .then(function (response) {
  //     return response.text();
  //   })
  //   .then(function (string) {
  //     // Convert the HTML string into a document object
  //     var parser = new DOMParser();
  //     var documentito = parser.parseFromString(string, "text/html");
  //     shadow.appendChild(documentito.documentElement);
  //   });
});
