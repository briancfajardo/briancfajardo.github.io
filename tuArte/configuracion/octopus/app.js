/**
 * Clase 'octopus' que funciona como intermedio entre el modelo (la lógica) y la vista
 */


var octopus = {
    /**
     * Constructor de la clase 'Octopus' que inicializa el modelo y la vista de la página web
     */
    init: function() {
        model.init();
        view.init();
    },
    /**
     * Método que retorna el nombre de la persona que está usando la página web
     * @returns {String} nombre de la persona que está usando la página web
     */
    getNombre: function(){
        return model.getNombre();
    },
    /**
     * Método que retorna el color principal de la página web
     * @returns {String} color principal de la página web
     */
    obtenerColorPrincipal: function(){
        return model.obtenerColorPrincipal();
    },
    /**
     * Método que retorna el color secundario de la página web
     * @returns {String} color secundario de la página web
     */
    obtenerColorSecundario: function(){
        return model.obtenerColorSecundario();
    }
}
octopus.init();