"use strict";
import { data } from "./datos.js";
const fragment = document.createDocumentFragment();
const conteItems = document.querySelector("ul");
const informacion = document.querySelector("div");

let nombreItems = ["Home", "Courses", "Blog", "Online", "The most recent"];

nombreItems.forEach((item) => {
  let items = document.createElement("LI");
  items.innerHTML = item;
  fragment.appendChild(items);
  conteItems.appendChild(fragment);
});

for (let i = 0; i < nombreItems.length; i++) {
  conteItems.children[i].addEventListener("click", () => {
    for (const i of conteItems.children) i.style.background = "transparent";
    conteItems.children[i].style.background = "#f00";
    informacion.innerHTML = "";
    switch (conteItems.children[i].textContent) {
      case "Home":
        informacion.innerHTML = `<img width=100 src ="https://s9.postimg.cc/ljpnkxxe7/online.jpg" alt="imagen de pagina de inicio">`;
        break;
      case "Courses":
        data.cursos.curso.forEach((e) => {
          informacion.innerHTML += `
          <h1>${e}</h1>
          <p>${data.cursos.descripcion}</p>
          <aside>${data.cursos.infor}</aside>
          `;
        });
        break;
      case "Blog":
        informacion.innerHTML = `
          <img width=100 src=${data.blog.img} alt="imagen blog">
          <p>${data.blog.descripcion}</p>
          <aside>${data.blog.infor}</aside>
          `;
        break;
      case "Online":
        informacion.innerHTML = `
          <img width=100 src=${data.online.img} alt="imagen de sesion online">
          <p>${data.online.descripcion}</p>
          <aside>${data.online.infor}</aside>
          `;
        break;
      case "The most recent":
        for (const i of data.recent.img) {
          informacion.innerHTML += `
          <img width=100 src=${i} alt="imagenes de pagina recent">
          <p>${data.recent.descripcion}</p>
          <aside>${data.recent.infor}</aside>
          `;
        }
        break;
    }
  });
}
