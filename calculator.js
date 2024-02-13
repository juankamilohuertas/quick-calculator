"use strict";
const entrada1 = document.querySelector("#entrada");
const mensaje = document.querySelector("p");
const resDom = document.querySelector("div");
/* pidiendo datos para crear el usuario */
let infoUser = new Object();
/* preguntando el nombre */
let iterrador = 0;
const registro = (entrada, answerEdad, answerHabilidades) => {
  entrada1.value = "";
  if (iterrador == 0) answerEdad("¿Cual es tu edad?", entrada);
  else if (iterrador == 1)
    answerHabilidades("selecciona cuales son tus habilidades", entrada);
  else if (iterrador == 2) {
    infoUser.habilidades = entrada;
    info(infoUser.nombre, infoUser.edad, infoUser.habilidades);
    atributoBoton();
  }
  iterrador++;
};
/* preguntando la edad */
const edad = (edad, entrada) => {
  infoUser.nombre = entrada;
  mensaje.innerHTML = edad;
};
const habilidades = (answerhabilidad, entrada) => {
  infoUser.edad = entrada;
  mensaje.innerHTML = answerhabilidad;
};
/* atributos del botton */
const atributoBoton = () => {
  if (iterrador <= 1) {
    mensaje.innerHTML = "¿Como te llamas?";
    entrada1.type = "text";
    entrada1.value = "";
    entrada1.placeholder = "Escribe aqui";
  } else {
    mensaje.innerHTML = `bienbenid@ ${infoUser.nombre}`;
    entrada1.type = "button";
    entrada1.value = "NEXT";
    entrada1.placeholder = "";
  }
};
entrada1.addEventListener("mousedown", atributoBoton);

entrada1.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && iterrador <= 2) {
    registro(entrada1.value, edad, habilidades);
  }
});
/* mostrando info */
const info = (nombre, edad, habilidades) => {
  const dom = `
  User: ${nombre}
  Edad: ${edad}
  Habilidades: ${habilidades}`;
  resDom.innerHTML = dom;
};

/******************************************************/

const encabezado = document.querySelector("h4");
const entrada2 = document.querySelector("#entrada2");
const mensaje2 = document.querySelector("ul");

let contador = 0;
const principal2 = () => {
  item1(entrada2.value);
  if (contador == 0) encabezado.innerHTML = "¿Que edad tienes?";
  else if (contador == 1) encabezado.innerHTML = "¿que te gusta hacer?";
  else if (contador >= 2) info2(data2);
  contador++;
};

const item1 = (info) => {
  data2[contador] = info;
  entrada2.value = "";
};

entrada2.addEventListener("mousedown", () => {
  if (contador == 0) {
    entrada2.type = "text";
    entrada2.value = "";
    entrada2.placeholder = "Escribe aqui";
    encabezado.innerHTML = "¿Como te llamas?";
  }
});

entrada2.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    principal2();
  }
});

let data2 = [];
/* mostrando info */
const info2 = (datos) => {
  let dom = `
  <li>Nombre: ${datos[0]}</li>
  <li>Edad: ${datos[1]}</li>
  <li>Pasatiempos: ${datos[2]}</li>
  `;
  mensaje2.innerHTML = dom;
  entrada2.type = "button";
  entrada2.value = "NEXT";
  entrada2.removeAttribute("placeholder");
};

/******************************************************/

const encabezado3 = document.querySelector("h5");
const entrada3 = document.querySelector("#entrada3");
const mensaje3 = document.querySelector("code");

class Persona {
  constructor(nombre, edad, habilidades) {
    this.nombre = nombre;
    this.edad = edad;
    this.habilidades = habilidades;
  }
  botonEntrada() {
    encabezado3.innerHTML = this.nombre;
    entrada3.type = "text";
    entrada3.placeholder = "Escribe aqui";
    entrada3.removeAttribute("value");
  }
  botonSiguiente() {
    encabezado3.innerHTML = `Bienvenida/o ${data.nombre}`;
    entrada3.type = "button";
    entrada3.removeAttribute("placeholder");
    entrada3.value = "Next";
  }
  preguntasYrespuestas(e) {
    if (e.key == "Enter" && contando <= 2) {
      if (contando == 0) {
        encabezado3.innerHTML = this.edad;
        data.nombre = entrada3.value;
      } else if (contando == 1) {
        encabezado3.innerHTML = this.habilidades;
        data.edad = entrada3.value;
      } else if (contando == 2) {
        data.habilidades = entrada3.value;
      }
      entrada3.value = "";
      contando++;
    }
  }
  infoDom() {
    if (contando == 3) {
      mensaje3.innerHTML = `
      Nombre: ${data.nombre}
      Edad: ${data.edad}
      Habilidades: ${data.habilidades}`;
      this.botonSiguiente();
    }
  }
}

const preguntas = new Persona(
  "¿Como te llamas?",
  "¿Cual es tu edad?",
  "¿Que te gusta hacer?"
);

let contando = 0;
let data = new Persona();

entrada3.addEventListener("mousedown", () => {
  if (!contando) preguntas.botonEntrada();
});

entrada3.addEventListener("keydown", (e) => {
  preguntas.preguntasYrespuestas(e);
  preguntas.infoDom();
});


