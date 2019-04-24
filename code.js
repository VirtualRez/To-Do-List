let resultado = document.querySelectorAll('#resultado')[0];
let contador = 0;
if(document.cookie[8] != undefined){
  contador = document.cookie[7] + document.cookie[8]
}
else if(document.cookie[7] != undefined){
  contador = document.cookie[7]
}

resultado.textContent = contador;
const botonSumar = document.querySelectorAll('body > div > div > div > button.btn.btn-success.mx-auto.contador')[0];
botonSumar.addEventListener('click', sumar);

const botonRestar = document.querySelectorAll('body > div > div > div > button.btn.btn-danger.mx-auto.contador')[0];
botonRestar.addEventListener('click', restar)

function sumar() {
  contador++;
  resultado.textContent = contador;
  document.cookie = "cuenta="+contador;
  return;
}

function restar() {
  contador--;
  resultado.textContent = contador;
  document.cookie = "cuenta="+contador;
  return;
}
//Evento suma y resta - document cookie para guardar resultado en el servidor.
//necesitas tener la web en un servidor, ejemplo github pages
//cookies
