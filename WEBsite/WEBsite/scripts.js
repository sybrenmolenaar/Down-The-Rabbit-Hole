// hulp van Sonja Rouwhorst
var burger = document.querySelector('.burger');
var nav = document.querySelector('nav ul');

function doeiets() {
  nav.classList.toggle('nav-active');
  burger.classList.toggle('toggle');
}
burger.addEventListener('click', doeiets)