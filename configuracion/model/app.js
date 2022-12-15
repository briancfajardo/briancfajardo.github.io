var model = {
    nombre: localStorage.getItem('Nombre'),
    colorPrincipal: localStorage.getItem('color-principal'),
    colorSecundatio: localStorage.getItem('color-secundario'),
    
    getNombre: function(){
        return this.nombre;
    },
    obtenerColorPrincipal: function(){
        return this.colorPrincipal;
    },
    obtenerColorSecundario: function(){
        return this.colorSecundatio;
    },
    init: function(){

    }
}