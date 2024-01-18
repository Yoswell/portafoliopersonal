const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");
const cv = document.getElementById('cv');

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

const plus = document.getElementById('cplusplus');
const htmlCss = document.getElementById('htmlCss');
const react = document.getElementById('react');
const java = document.getElementById('java');
const csharp = document.getElementById('csharp');

const openplus = document.getElementById('openCplusplus');
const openreact = document.getElementById('openReact');
const openJava = document.getElementById('openJava');
const opencSharp = document.getElementById('openCsharp');
const openHtml = document.getElementById('openHtml');

openplus.addEventListener('click', (e) => {
  e.preventDefault();
  htmlCss.style.display = "none";
  csharp.style.display = "none";
  java.style.display = "none";
  react.style.display = "none";
  plus.style.display = "grid";
});

openreact.addEventListener('click', (e) => {
  e.preventDefault();
  htmlCss.style.display = "none";
  plus.style.display = "none";
  csharp.style.display = "none";
  java.style.display = "none";
  react.style.display = "grid";
});

openJava.addEventListener('click', (e) => {
  e.preventDefault();
  htmlCss.style.display = "none";
  plus.style.display = "none";
  react.style.display = "none";
  csharp.style.display = "none";
  java.style.display = "grid";
});

opencSharp.addEventListener('click', (e) => {
  e.preventDefault();
  htmlCss.style.display = "none";
  plus.style.display = "none";
  react.style.display = "none";
  java.style.display = "none";
  csharp.style.display = "grid";
});

openHtml.addEventListener('click', (e) => {
  e.preventDefault();
  plus.style.display = "none";
  react.style.display = "none";
  java.style.display = "none";
  csharp.style.display = "none";
  htmlCss.style.display = "grid";
});

cv.addEventListener('click', function() {
  var pdfUrl = 'https://drive.google.com/file/d/11d923_WySt_evUQh6ZzLoq-jlSZoQIy7/view?usp=sharing';
  window.open(pdfUrl, '_blank');
});
