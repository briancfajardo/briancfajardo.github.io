var octopus = {
    init: function() {
        model.init();
        view.init();
    },
    getNombre: function(){
        return model.getNombre();
    },
    obtenerColorPrincipal: function(){
        return model.obtenerColorPrincipal();
    },
    obtenerColorSecundario: function(){
        return model.obtenerColorSecundario();
    },
    obtenetArtistas: function(){
        return model.obtenetArtistas();
    }
}
octopus.init();