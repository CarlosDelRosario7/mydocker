"use strict";

document.querySelector(".checkbtn").addEventListener("click", () => {
  document.querySelector(".menu-derecho").classList.toggle("menu-derecho-activado");
});

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');

prev.addEventListener('click', () => {
  slider.scrollLeft -= 254
});

next.addEventListener('click', () => {
  slider.scrollLeft += 254
});

//---------------------------------------------------------------

const titulo = document.getElementById('titulo');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const asunto = document.getElementById('asunto');

document.addEventListener('DOMContentLoaded', () => {
  copy.innerHTML = ` Copyright <b>©</b> ${new Date().getFullYear()} | <b>SolidType</b>`;
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (nombre.value === '' || correo.value === '' || celular.value === '' || asunto.value === '') {
    titulo.innerHTML = "<div style='display: flex; justify-content: center;  height: 30px; align-items:center ; text-align:center; color:white; background:red; margin-top:-30px; margin-bottom:10px;'>Complete todos los campos.</div>"
    return;
  }
  let cuerpo = `Enviado desde ST_Web:\n\nNombre: ${nombre.value}\nCorreo: ${correo.value}\nCelular: ${celular.value}`;
  const data = {
    asunto: asunto.value,
    cuerpo: cuerpo
  };
  console.log(data);
  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    titulo.innerHTML = "<div style='display: flex; justify-content: center;  height: 30px; align-items:center ; text-align:center; color:white; background:green; margin-top:-30px; margin-bottom:10px;'>Enviado exitosamente</div>"
    nombre.value = '';
    correo.value = '';
    celular.value = '';
    asunto.value = '';
    cuerpo = '';
  })
  .catch((error) => {
    console.error('Error:', error);
    titulo.innerHTML = "<div style='display: flex; justify-content: center;  height: 30px; align-items:center ; text-align:center; color:white; background:red; margin-top:-30px; margin-bottom:10px;'>Error al enviar</div>"
  });
});