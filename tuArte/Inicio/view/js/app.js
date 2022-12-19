let colores = new Map();
colores.set('#ff6493',['#7e3148','#a13e5c']);
colores.set('#11ca00',['#0b3507','#114c0a']);
colores.set('#e68c37',['#9e6027','#be742e']);
colores.set('#FFAD00',['#8f6200','#be8200']);
colores.set('#00ade1',['#006685','#0084ac']);

var view = {
    eliminarElementos: function(){
        var elemento  = document.getElementById("grilla-artistas");
        while (elemento.firstChild) {
            elemento.removeChild(elemento.firstChild);
        }
    },
    obtenerPintarBarraArtistas: function(){
        var artistas = octopus.obtenetArtistas();
        for(var i = 0; i< artistas.length; i++ ){
            this.barraAutores(artistas[i]);
        }
    },
    obtenerPintarArtistas: function(){
        document.getElementById('artista-actual').textContent = 'Artistas';
        var artistas = octopus.obtenetArtistas();
        for(var i = 0; i< artistas.length; i++ ){
            this.pintarArtistas(artistas[i]);
        }
    },
    pintarArtistas: function(artista){
        var div = document.createElement('div');
        var imagen = document.createElement('img');
        div.setAttribute('class','tarjeta-artista');
        var texto = document.createElement('p');
        var self = this;

        imagen.src = artista.obtenetURLDescipcion(0)[0];
        imagen.setAttribute( 'width',"100%");
        imagen.setAttribute( 'height', "auto");
        texto.textContent = artista.getNombreArtista();

        div.appendChild(imagen);
        div.appendChild(texto);

        document.getElementById('grilla-artistas').appendChild(div);
        var elemento = document.querySelectorAll('.nombre-artistas')[document.querySelectorAll('.tarjeta-artista').length - 1];

        document.querySelectorAll('.tarjeta-artista')[document.querySelectorAll('.tarjeta-artista').length - 1].addEventListener('click', function(){
            self.recargarPaginaAutor(artista);
            self.quitarClase('seleccion');
            elemento.children[0].classList.add('seleccion');
        });
    },
    pintarImgArtista: function(url, nombre, id, descripcionImg){
        var div = document.createElement('div');
        var imagen = document.createElement('img');
        var self = this;
        div.setAttribute('class','tarjeta-artista');
        div.setAttribute('id', id);
        var texto = document.createElement('p');
        imagen.src = url;
        imagen.setAttribute( 'width',"100%");
        imagen.setAttribute( 'height', "auto");
        texto.textContent = nombre;

        div.appendChild(imagen);
        div.appendChild(texto);

        document.getElementById('grilla-artistas').appendChild(div);

        const elemento = document.querySelectorAll('#img-artista')[document.querySelectorAll('#img-artista').length - 1];
        elemento.addEventListener('click', (function(urlC, nombreC, descripcionImgC){
            return function(){
                document.getElementById('artista-actual').textContent = nombreC;
                self.eliminarElementos();
                self.pintarImgGrande(urlC, descripcionImgC);
                
            }
        })(url, nombre, descripcionImg));
        
    },
    pintarImgGrande: function(url, descripcionImg){
        var div = document.createElement('div');
        var imagen = document.createElement('img');

        div.setAttribute('id', 'representacion-img');


        imagen.src = url;
        imagen.setAttribute( 'width',"100%");
        imagen.setAttribute( 'height', "auto");
        
        imagen.setAttribute( 'width',"100%");
        imagen.setAttribute( 'height', "auto");

        var texto = document.createElement('p');

        texto.setAttribute('id', 'descripcion-img');

        texto.textContent = descripcionImg;


        div.appendChild(imagen);
        div.appendChild(texto);

        document.getElementById('grilla-artistas').appendChild(div);


    },
    pintarElementosArtista: function(artista){
        for(var i = 0; i< artista.obtenerNumeroImagenes(); i++ ){
            this.pintarImgArtista(artista.obtenetURLDescipcion(i)[0], artista.obtenerNombreImg(i), 'img-artista', artista.obtenetURLDescipcion(i)[1]);
        }
    },
    barraAutores: function(artista){
        var barraArtistas = document.getElementById('lista-autores');
        var li = document.createElement('li');
        var self = this;
        
        li.setAttribute('class','nombre-artistas');
        li.setAttribute('style','--clr:'+octopus.obtenerColorPrincipal()+'; --j:'+octopus.obtenerColorSecundario());
        li.innerHTML = '<a data-text='+artista.getNombreArtista().replaceAll(' ', '&nbsp;')+'>'+artista.getNombreArtista().replaceAll(' ', '&nbsp;')+'</a>';
        
        barraArtistas.appendChild(li);
        var elemento = document.getElementsByClassName('nombre-artistas')[document.querySelectorAll('.nombre-artistas').length - 1];
        elemento.addEventListener('click', (function(elementoCopy){
            return function(){
                self.recargarPaginaAutor(artista);
                self.quitarClase('seleccion');
                elementoCopy.children[0].classList.add('seleccion');
            }
        })(elemento));
    },
    quitarClase: function(clase){
        let elemento = document.getElementsByClassName(clase);
        for(var i = 0; elemento.length > 0; i++){
            elemento[i].classList.remove(clase);
        }
    },
    recargarPaginaAutor: function(artista){

        document.getElementById('artista-actual').textContent = artista.getNombreArtista();
        this.eliminarElementos();
        this.pintarElementosArtista(artista);

    },
    cambiarColorSecciones: function(){
        var secciones = document.getElementById('secciones');
        var titulo = document.getElementById('saludo');
        var sombraCuerpo = document.getElementById('cuerpo');
        secciones.setAttribute('style','--f:'+octopus.obtenerColorSecundario() + '; --b:'+colores.get(octopus.obtenerColorSecundario())[0] + '; --a:'+colores.get(octopus.obtenerColorSecundario())[1]);
        titulo.setAttribute('style', '--clr:'+octopus.obtenerColorPrincipal());
        sombraCuerpo.setAttribute('style', '--clrP:'+octopus.obtenerColorPrincipal()+';'+'--clrS:'+octopus.obtenerColorSecundario());
    },  
    init: function(){
        var nombreP = document.getElementById('nombreP');
        nombreP.textContent = 'Hola, ' + octopus.getNombre();
        this.obtenerPintarBarraArtistas();
        this.obtenerPintarArtistas();
        var self = this;
        document.getElementById('Artistas').addEventListener('click', function(){
            self.eliminarElementos();
            self.obtenerPintarArtistas();
            self.quitarClase('seleccion');
            document.querySelector('#Artistas>a').classList.add('seleccion');
        });
        this.cambiarColorSecciones();
    }
}