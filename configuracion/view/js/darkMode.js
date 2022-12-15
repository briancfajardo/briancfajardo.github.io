const body = document.querySelector('body');
const header = document.querySelector('header');
const tituloInicial = document.querySelector('#tituloInicial');
const secciones = document.querySelector('#secciones');
const textoCuerpo = document.querySelector('#texto-cuerpo');
const contenidoConfig = document.querySelector('#contenido-config');
const seccionColorPrincipal = document.querySelector('#seccion-color-principal');
const seccionColorSecundario = document.querySelector('#seccion-color-secundario');
const seccionCambioNombre = document.querySelector('#seccion-cambio-nombre');
const textoSeleccionColor = document.querySelectorAll('#texto-seleccion-color');
const label = document.querySelector('label');

const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    toggle.classList.toggle('modo-claro');
    body.classList.toggle('modo-claro');
    header.classList.toggle('modo-claro');
    tituloInicial.classList.toggle('modo-claro');
    secciones.classList.toggle('modo-claro');
    textoCuerpo.classList.toggle('modo-claro');
    contenidoConfig.classList.toggle('modo-claro');
    seccionColorPrincipal.classList.toggle('modo-claro');
    seccionColorSecundario.classList.toggle('modo-claro');
    seccionCambioNombre.classList.toggle('modo-claro');
    textoSeleccionColor.forEach(function(element){
        element.classList.toggle('modo-claro');
    });
    label.classList.toggle('modo-claro');

    if(body.classList.contains('modo-claro')){
        localStorage.setItem('modo', 'claro');
    }else{
        localStorage.setItem('modo', 'oscuro');
    }
}
if(localStorage.getItem('modo') === 'claro'){
    toggle.click();
}