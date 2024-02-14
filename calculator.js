"use strict";
const fragment = document.createDocumentFragment();
const conteNumeros = document.querySelector(".conteNumeros");
const conteOperadores = document.querySelector(".conteOperadores");
const pantalla = document.querySelector(".pantalla");
const pantalla2 = document.querySelector(".pantalla2");
const valorFinal = document.querySelector(".valorFinal");
/* numeros digitados en pantalla */
let storedNumber = [];
storedNumber.op = "";
storedNumber.num1 = "";
storedNumber.num2 = "";
storedNumber.total = "";
const numeroDigitado = (numero) => {
  conteNumeros.children[numero].addEventListener("click", () => {
    if (storedNumber.op != "" && terminacionOp != true) {
      storedNumber.num2 += numero;
    } else if (terminacionOp != false) {
      storedNumber.num1 += numero;
    } else storedNumber.num1 += numero;
    pantallaDom(storedNumber.op, storedNumber.num1, storedNumber.num2);
  });
};
/* operadores digitados en pantalla */
const operadorDigitado = (operador) => {
  operador.addEventListener("click", () => {
    if (storedNumber.total != undefined && terminacionOp != true) {
      storedNumber.num1 = storedNumber.total;
      storedNumber.op = operador.textContent;
      storedNumber.num2 = "";
      pantallaDom(storedNumber.op, storedNumber.num1, storedNumber.num2);
    } else if (terminacionOp != false) {
      storedNumber.op = operador.textContent;
      storedNumber.num2 = "";
      if (storedNumber.num1 == "") storedNumber.num1 = "0";
      terminacionOp = false;
      pantallaDom(storedNumber.op, storedNumber.num1, storedNumber.num2);
    } else {
      storedNumber.op = operador.textContent;
      pantallaDom(storedNumber.op, storedNumber.num1, storedNumber.num2);
    }
  });
};
/* creando los numeros de la calculadora */
for (let numeros = 0; numeros <= 9; numeros++) {
  let hijosNumeros = document.createElement("DIV");
  hijosNumeros.innerHTML = numeros;
  hijosNumeros.classList.add("conteNumeros__itemNumero");
  fragment.appendChild(hijosNumeros);
  conteNumeros.appendChild(fragment);
  numeroDigitado(numeros);
}
/* creando los botones de las operaciones (+,-,x,÷)*/
for (
  let operadores = 0;
  operadores < ["+", "-", "x", "÷", "Borrar"].length;
  operadores++
) {
  let hijosOperadores = document.createElement("DIV");
  hijosOperadores.innerHTML = ["+", "-", "x", "÷", "Borrar"][operadores];
  hijosOperadores.classList.add("conteOperadores__itemOperador");
  fragment.appendChild(hijosOperadores);
  conteOperadores.appendChild(fragment);
  operadorDigitado(conteOperadores.children[operadores], operadores);
}
/* mostrando mumeros en la pantalla (DOM) de la calculadora */
const pantallaDom = (op, v1, v2) => {
  pantalla.innerHTML = `${v1} ${op} ${v2}`;
  let converV1 = parseInt(v1);
  let converV2 = parseInt(v2);
  let res;
  if (op == "+") res = converV1 + converV2;
  if (op == "-") res = converV1 - converV2;
  if (op == "x") res = converV1 * converV2;
  if (op == "÷") res = converV1 / converV2;
  storedNumber.total = res;
  pantalla2.innerHTML = `= 0`;
  borrar(op);
  return storedNumber.total;
};
/* borar todo en pantalla*/
const borrar = (op) => {
  if (op == "Borrar") {
    storedNumber.op = "";
    storedNumber.num1 = "";
    storedNumber.num2 = "";
    pantalla.innerHTML = "";
  }
};
/* mostrando y agregando el resultado en la pantalla */
let terminacionOp = false;
valorFinal.addEventListener("click", () => {
  pantalla2.style.fontSize = "7rem";
  borrar("Borrar");
  terminacionOp = true;
});
/* valor retornado automaticamente */
conteNumeros.addEventListener("click", () => {
  pantalla2.style.fontSize = "5rem";
  if (storedNumber.num2 != "") {
    pantalla2.innerHTML = ` = ${storedNumber.total}`;
  }
});
