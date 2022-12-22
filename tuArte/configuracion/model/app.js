/**
 * Clase model de la pestaña de configuración
 */

var model = {
    nombre: localStorage.getItem('Nombre'),
    colorPrincipal: localStorage.getItem('color-principal'),
    colorSecundatio: localStorage.getItem('color-secundario'),
    /**
     * Método que obtiene el nombre de la persona que está usando la página web
     * @returns {String} nombre de la persona que está usando la página web
     */
    getNombre: function(){
        return this.nombre;
    },
    /**
     * Método que obtiene el color principal de la página web
     * @returns {String} Color principal
     */
    obtenerColorPrincipal: function(){
        return this.colorPrincipal;
    },
    /**
     * Método que obtiene el color secundario de la página web
     * @returns {String} Color secundario
     */
    obtenerColorSecundario: function(){
        return this.colorSecundatio;
    },
    /**
     * Constructor
     */
    init: function(){

    }
}