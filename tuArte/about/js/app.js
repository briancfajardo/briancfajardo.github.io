let colores = new Map();
colores.set('#ff6493',['#7e3148','#a13e5c']);
colores.set('#11ca00',['#0b3507','#114c0a']);
colores.set('#e68c37',['#9e6027','#be742e']);
colores.set('#FFAD00',['#8f6200','#be8200']);
colores.set('#00ade1',['#006685','#0084ac']);

function cambiarColorSecciones(){
    var secciones = document.getElementById('secciones');
    var titulo = document.getElementById('saludo');
    secciones.setAttribute('style','--f:'+ localStorage.getItem('color-secundario') + '; --b:'+colores.get(localStorage.getItem('color-secundario'))[0] + '; --a:'+colores.get(localStorage.getItem('color-secundario'))[1]);
    titulo.setAttribute('style', '--clr:'+ localStorage.getItem('color-principal'));
}
cambiarColorSecciones();

var nombre = localStorage.getItem('Nombre');
var nombreP = document.getElementById('nombreP');
nombreP.textContent = 'Hola, ' + nombre;