import { data } from '../data/data.js';

const element = document.getElementById('boton');
element.addEventListener('click', botonAleatorio);

function botonAleatorio() {
  let random = Math.floor(Math.random() * data.length);

  let personaje = data.find((perso) => perso.id == Number(random));

  document.getElementById('personajes').innerHTML = `
  <div class="fondoTextura" >

  <div class="fondoCard" >
  <img class="foto" src="${personaje.imagen}" alt="personas">
  <li class=" letra" > ${personaje.personaje}</li>
  <li class=" letra" >${personaje.casa}</li>
  <button id="botonnuevo" class="boton2">Nuevo Personaje</button>
  
  </div>
  </div>
  `;

  document
    .getElementById('botonnuevo')
    .addEventListener('click', botonAleatorio);
}
