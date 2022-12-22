
const body = document.querySelector('body');
const input = document.querySelector('input');
const toggle = document.getElementById('toggle');
const titulo = document.getElementById('tituloInicial');
const boton = document.getElementById('boton-iniciar');

localStorage.setItem('modo', 'oscuro');
/**
 * Función que cambia la clase de modo claro a modo oscuro o al revés para que se cambien
 * los estilos (Inicia en modo oscuro)
 */
toggle.onclick = function(){
    toggle.classList.toggle('modo-claro');
    body.classList.toggle('modo-claro');
    input.classList.toggle('modo-claro');
    titulo.classList.toggle('modo-claro');
    boton.classList.toggle('modo-claro');
    if(body.classList.contains('modo-claro')){
        localStorage.setItem('modo', 'claro');
    }else{
        localStorage.setItem('modo', 'oscuro');
    }
}
