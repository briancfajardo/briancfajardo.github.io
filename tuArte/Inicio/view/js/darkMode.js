/**
 * Obtención de elementos que serán cambiados de modo
 */
const body = document.querySelector('body');
const header = document.querySelector('header');
const tituloInicial = document.querySelector('#tituloInicial');
const secciones = document.querySelector('#secciones');
const barraAutores = document.querySelector('#barra-autores');
const listaAutores = document.querySelector('#lista-autores');
const textoCuerpo = document.querySelector('#texto-cuerpo');
const representacionImg = document.querySelector('#grilla-artistas');
const toggle = document.getElementById('toggle');

/**
 * Función que cambia la clase de modo claro a modo oscuro o al revés para que se cambien
 * los estilos 
 */

toggle.onclick = function(){
    toggle.classList.toggle('modo-claro');
    body.classList.toggle('modo-claro');
    header.classList.toggle('modo-claro');
    tituloInicial.classList.toggle('modo-claro');
    secciones.classList.toggle('modo-claro');
    barraAutores.classList.toggle('modo-claro');
    listaAutores.classList.toggle('modo-claro');
    textoCuerpo.classList.toggle('modo-claro');
    representacionImg.classList.toggle('modo-claro');

    if(body.classList.contains('modo-claro')){
        localStorage.setItem('modo', 'claro');
    }else{
        localStorage.setItem('modo', 'oscuro');
    }
}
/**
 * Validación del modo de la página
 */
if(localStorage.getItem('modo') === 'claro'){
    toggle.click();
}