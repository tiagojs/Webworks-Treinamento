define([], function () {
    var resultado = function () {
        var _name = 'Nome do modulo';
        this.getName = function () {
            return _name;
        }
    };
 
    return resultado;
 
});