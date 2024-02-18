"use strict";
const images = document.querySelector(".conteImg");
const zona = document.querySelector(".zona");

for (const img of images.children) {
  img.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("imgen", e.target.src);
  });
}

zona.addEventListener("dragover", (e) => {
  e.preventDefault();
  zona.style = "outline: dashed 5px";
});

zona.addEventListener("drop", (e) => {
  const res = e.dataTransfer.getData("imgen");
  zona.style = `background-image: URL(${res})`;
});

zona.addEventListener("dragleave", (e) => {
  zona.style = "outline: ";
});
