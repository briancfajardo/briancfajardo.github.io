const espacio = '&nbsp;';

/**
 * Clase Artista que contiene el nombre del artista y una lista de objetos tipo imagen
 */
class Artista{
    constructor(){
        this.nombre = '';
        this.listaImagenes = [];
    }

    /**
     * Método para obtener el nombre del artista
     * @returns {String} el nombre del artista
     */

    getNombreArtista(){
        return this.nombre;
    }
    /**
     * Método usado para cambiar el nombre del artista
     * @param {String} nombre Representa el nuevo nombre del artista
     */
    cambiarNombreArtista(nombre){
        this.nombre = nombre;
    }
    /**
     * Método usado para obtener el nombre de la imagen a partir de su posición
     * @param {Integer} num Posición del arreglo de imagenes del artista que desea obtener
     * @returns {String} El nombre de la imagen del artista
     */
    obtenerNombreImg(num){
        return this.listaImagenes[num].obtenerNombre();
    }
    /**
     * Método usado para obtener el la dirección y la descipción de una imagen a partir de su posición
     * @param {Integer} num Posición del arreglo de obras del artista que desea obtener
     * @returns {(String, String)} Representa la dirección (directorio) de donde se encuentra almacenada la imagen y su descipción
     */
    obtenetURLDescipcion(num){
        return [this.listaImagenes[num].obtenerUrl(), this.listaImagenes[num].obtenerDescripcion()];
    }
    /**
     * Método que retorna el número de imagenes que posee cada artista
     * @returns {Integer} número de imagenes que posee el artista
     */
    obtenerNumeroImagenes(){
        return this.listaImagenes.length;
    }
    /**
     * Método que crea y agrega una imagen a un artista con base en su nombre, dirección y descripción
     * @param {String} nombre de la imagen a añadir
     * @param {String} url de la imagen a añadir
     * @param {String} descipcion de la imagen a añadir
     */
    añadirImg(nombre, url, descipcion){
        this.listaImagenes.push(new imagen(nombre, url, descipcion));
    }
    
}
/**
 * Clase imagen que contendrá el nombre, dirección y descipción de las imagenes de los artístas
 */
class imagen {
    /**
     * Constructor de la clase imagen
     * @param {String} nombre 
     * @param {String} url 
     * @param {String} descipcion 
     */
    constructor(nombre, url, descipcion){
        this.nombre = nombre;
        this.url = url;
        this.descipcion = descipcion;
    }
    /**
     * Método que retorna el nombre de la imagen
     * @returns {String} nombre de la imagen 
     */
    obtenerNombre(){
        return this.nombre;
    }
    /**
     * Método para obtener la dirección de donde se encuentra alamcenada la imagen 
     * @returns {String} Dirección de donde se encuentra alamcenada la imagen 
     */
    obtenerUrl(){
        return this.url;
    }
    /**
     * Método que retorna la dirrección de la imagen
     * @returns {String} descipción de la imagen
     */
    obtenerDescripcion(){
        return this.descipcion;
    }
}
/**
 * Clase modelo que sirve contiene toda la lógica de la aplicación web
 */
var model = {
    nombre: localStorage.getItem('Nombre'),
    colorPrincipal: localStorage.getItem('color-principal'),
    colorSecundatio: localStorage.getItem('color-secundario'),
    listaArtistas: [],
    /**
     * Método que retorna el nombre de la persona que está usando la galería de arte
     * @returns {String} Nombre de la persona que está usando la galería de arte
     */
    getNombre: function(){
        return this.nombre;
    },
    /**
     * Método que retorna el color principal actual de la página web
     * @returns {String} Color principal
     */
    obtenerColorPrincipal: function(){
        return this.colorPrincipal;
    },
    /**
     * Método que retorna el color secundario actual de la página web
     * @returns {String} Color secundario
     */
    obtenerColorSecundario: function(){
        return this.colorSecundatio;
    },
    /**
     * Método que retorna una lista de objetos tipo Artista
     * @returns {[Artista]} lista de objetos tipo Artista
     */
    obtenetArtistas: function(){
        return this.listaArtistas;
    },
    /**
     * Método usado para añadir un nuevo artisra
     * @param {Strin} nombre 
     * @param {String} nombreImg 
     * @param {String} url 
     * @param {String} descipcion 
     */
    añadirArtista: function(nombre,nombreImg, url, descipcion){
        var artistaAux = new Artista();

        artistaAux.cambiarNombreArtista(nombre);
        artistaAux.añadirImg(nombreImg, url, descipcion);
        this.listaArtistas.push(artistaAux);
        
    },
    /**
     * Método que inicializa la página con 3 artistas y descripciones de las imágenes de los mismos
     */
    init: function(){
        this.añadirArtista(' Camilo Fajardo ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Es un ojo pindado en oleos que actualmente está en proceso de finalización');
        this.añadirArtista(' Brian Sánchez ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        this.añadirArtista(' Alberto ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        this.añadirArtista(' A Fajardo ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');  
        
        this.listaArtistas[0].añadirImg('Retrato blanco y negro','../imgArte/CamiloFajardo/retratoBrianCamiloFajardo.jpeg','Retrato del año 2018 realizado con una combinación entre lapiz  carboncillo');
        this.listaArtistas[0].añadirImg('Mujer posando','../imgArte/CamiloFajardo/cuerpoModeloBrianCamiloFajardo.jpeg','Retrato a cuerpo completo de una mujer desnuda posando realizado en el año 2019');
    }    
}
