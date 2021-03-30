import _ from "lodash";
import "./assets/css/style.css";
import Icon from "./assets/images/icon.jpg";
import json from "./assets/data/data.json5";

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work --
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  const botonaso = document.createElement("button");
  botonaso.id = "botonaso";
  botonaso.textContent = "shadow?";
  element.appendChild(botonaso);
  const shadowContent = document.createElement("section");
  shadowContent.className = "shadow-content";
  element.appendChild(shadowContent);
  // var shadow = this.attachShadow({mode: 'open'});

  return element;
}

let documentaso = document.querySelector("#wololo");
documentaso.appendChild(component());

let botonaso = document.querySelector("#botonaso");

botonaso.addEventListener("click", function createShadow() {
  // var shadowroot = shadowContent.attachShadow(shadowRootInit);
  const shadowContent = document.querySelector(".shadow-content");
  let shadow = shadowContent.attachShadow({ mode: "open" });
  var para = document.createElement("p");
  para.textContent = "Hola";
  shadow.appendChild(para);
  console.log(shadow);

  // var url =
  //   "https://ppintel.s3-sa-east-1.amazonaws.com/assets/1228_LARDigital_Q320/7924/preview-6/index.html";

  var url =
    "https://s3-sa-east-1.amazonaws.com/intel.iot.site/html/8471_IOT/index.html";

  // fetch("http://localhost:5000/lacuracao.html")
  //   .then((response) => response)
  //   .then((data) => console.log(data.body));

  fetch("http://localhost:5000/lacuracao.html")
    .then(function (response) {
      return response.text();
    })
    .then(function (string) {
      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var documentito = parser.parseFromString(string, "text/html");
      // var documentito = document.createElement("div");
      shadow.appendChild(documentito.documentElement);
    });
  // fetch(url)
  //   .then((response) => response)
  //   .then((data) => console.log(data));
});
