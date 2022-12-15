const body = document.querySelector('body');
const cuerpo = document.querySelector('#cuerpo');
const header = document.querySelector('header');
const tituloInicial = document.querySelector('#tituloInicial');
const secciones = document.querySelector('#secciones');
const primeraSeccion = document.querySelector('#primera-seccion');
const seccionAutor = document.querySelector('#seccion-autor');
const seccionesTitulo = document.querySelectorAll('#seccion-titulo');

const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    toggle.classList.toggle('modo-claro');
    body.classList.toggle('modo-claro');
    cuerpo.classList.toggle('modo-claro');
    header.classList.toggle('modo-claro');
    tituloInicial.classList.toggle('modo-claro');
    secciones.classList.toggle('modo-claro');
    primeraSeccion.classList.toggle('modo-claro');
    seccionAutor.classList.toggle('modo-claro');
    seccionesTitulo.forEach(function(element){
        element.classList.toggle('modo-claro');
    });

    if(body.classList.contains('modo-claro')){
        localStorage.setItem('modo', 'claro');
    }else{
        localStorage.setItem('modo', 'oscuro');
    }
}
if(localStorage.getItem('modo') === 'claro'){
    toggle.click();
}