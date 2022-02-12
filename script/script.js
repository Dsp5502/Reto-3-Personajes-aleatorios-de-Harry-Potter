import { data } from '../data/data.js';

personajes.innerHTML = '';
data.forEach((personas) => {});

let random = Math.floor(Math.random() * data.length);

let personaje = data.find((perso) => perso.id == Number(random));

personajes.innerHTML += `
  <div class="fondoTextura" >

  <div class="fondoCard" >
  <img class="foto" src="${personaje.imagen}" alt="personas">
  <li class=" letra" > ${personaje.personaje}</li>
  <li class=" letra" >${personaje.casa}</li>
  <button class="boton2">Nuevo Personaje</button>
  
  </div>
  </div>
  `;

function probar() {
  alert('sirve');
}
