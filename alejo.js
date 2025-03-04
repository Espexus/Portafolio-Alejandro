let boton = document.getElementById("btn");
let caja = document.getElementById('cajatexto');

boton.addEventListener("click", mensaje)

function mensaje () {
    let nodo = document.createElement('input');
    nodo.setAttribute("placeholder", '¿Qué quieres decirme?')

    caja.replaceChildren(nodo);
}