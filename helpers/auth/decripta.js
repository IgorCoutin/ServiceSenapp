
module.exports = function decripta  (valor) {
    var retorno = ""
    var stexto = valor
    if (stexto == ""){
        return stexto
    }

    while (true)
    {
        var letra = stexto.substring(0, 3)
        var numero = parseInt(letra)
        numero -= 166
        letra = String.fromCharCode(numero)
        retorno += letra
        stexto = stexto.substring(3)
        if (stexto == ""){
            break
        }
    }
    return retorno
}
