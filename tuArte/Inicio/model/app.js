const espacio = '&nbsp;';
class Artista{
    constructor(){
        this.nombre = '';
        this.listaImagenes = [];
    }
    getNombreArtista(){
        return this.nombre;
    }
    cambiarNombreArtista(nombre){
        this.nombre = nombre;
    }
    obtenerNombreImg(num){
        return this.listaImagenes[num].obtenerNombre();
    }
    obtenetURLDescipcion(num){
        return [this.listaImagenes[num].obtenerUrl(), this.listaImagenes[num].obtenerDescripcion()];
    }
    obtenerNumeroImagenes(){
        return this.listaImagenes.length;
    }
    añadirImg(nombre, url, descipcion){
        this.listaImagenes.push(new imagen(nombre, url, descipcion));
    }
    
}
class imagen {
    constructor(nombre, url, descipcion){
        this.nombre = nombre;
        this.url = url;
        this.descipcion = descipcion;
    }
    obtenerNombre(){
        return this.nombre;
    }
    obtenerUrl(){
        return this.url;
    }
    obtenerDescripcion(){
        return this.descipcion;
    }
}

var model = {
    nombre: localStorage.getItem('Nombre'),
    colorPrincipal: localStorage.getItem('color-principal'),
    colorSecundatio: localStorage.getItem('color-secundario'),
    listaArtistas: [],
    getNombre: function(){
        return this.nombre;
    },
    obtenerColorPrincipal: function(){
        return this.colorPrincipal;
    },
    obtenerColorSecundario: function(){
        return this.colorSecundatio;
    },
    obtenetArtistas: function(){
        return this.listaArtistas;
    },
    añadirArtista: function(nombre,nombreImg, url, descipcion){
        var artistaAux = new Artista();

        artistaAux.cambiarNombreArtista(nombre);
        artistaAux.añadirImg(nombreImg, url, descipcion);
        this.listaArtistas.push(artistaAux);
        
    },
    init: function(){
        this.añadirArtista(' Camilo Fajardo ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Es un ojo pindado en oleos que actualmente está en proceso de finalización');
        this.añadirArtista(' Brian Sánchez ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        this.añadirArtista(' alberto unu ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');
        this.añadirArtista(' A Fajardo ', 'Ojo Al oleo', '../imgArte/CamiloFajardo/ojoBrianCamiloFajardo.jpeg','Ojo Camilo Fajardo');  
        
        this.listaArtistas[0].añadirImg('Retrato blanco y negro','../imgArte/CamiloFajardo/retratoBrianCamiloFajardo.jpeg','Retrato del año 2018 realizado con una combinación entre lapiz  carboncillo');
        this.listaArtistas[0].añadirImg('Mujer posando','../imgArte/CamiloFajardo/cuerpoModeloBrianCamiloFajardo.jpeg','Retrato a cuerpo completo de una mujer desnuda posando realizado en el año 2019');
    }    
}
