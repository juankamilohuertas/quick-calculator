"use strict";
const fragment = document.createDocumentFragment();
const display = document.querySelector(".display");
const conteNumber = document.querySelector(".conte__number");

/* creando operadores y asignandolos al DOM*/

let operadores = ["+", "-", "x", "÷"];
operadores.forEach((element) => {
  const conteOperadores = document.createElement("DIV");
  conteOperadores.innerHTML = element;
  fragment.appendChild(conteOperadores);
  conteNumber.appendChild(fragment);
});

/* const op = (v1, v2) => {
    if(operador == "+")return v1 + v2;
    if(operador == "-")return v1 - v2;
    if(operador == "*")return v1 * v2;
    if(operador == "/")return v1 / v2;
};
const res = op(23, 5);

console.log(res) */
