var boton1 = document.querySelector('#boton-iniciar');
var nombreP = $('#input-nombre');
var nombre = '';

/**
 * Almacena el valor que aparece en el input con un oyente
 */

nombreP[0].addEventListener('input', function(e){
    nombre = e.srcElement.value;
    e.preventDefault();
});
/**
 * Almacena el modo (claro u oscuro), el nombre y los colores pricipal y secundario 
 * y pasa a la siguiente ventana
 */
boton1.addEventListener('click', function(){
    const hijos = document.querySelector('#titulo-nombre').children;
    const toggle = document.querySelector('#toggle');
    for(var i = 0; i < hijos.length; i ++){
        hijos[i].classList.toggle('transformacion');
    }
    toggle.classList.toggle('transformacion');
    setTimeout(function(){
        localStorage.setItem('color-principal','#ff6493');
        localStorage.setItem('color-secundario','#11ca00');

        if (nombre !== ''){
            localStorage.setItem('Nombre', nombre);
        }else{
            localStorage.setItem('Nombre', '¿Cómo estás?');
        }
        location.href = 'Inicio/inicio.html';
        
    }, 1000*1);
        
});

/**
 * Evita el comportamiento por defecto del 'submit' y pasa a la siguiente página
 */

nombreP.submit(function (e) { 
    boton1.click();
    e.preventDefault();
});