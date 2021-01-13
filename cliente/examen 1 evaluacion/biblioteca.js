class Libro {
    constructor(genero, nombre, resumen) {
        this.genero = genero;
        this.nombre = nombre;
        this.resumen = resumen;
    }

    generarHTML() {
        var resultado = "<h2>" + this.nombre + "</h2><p>" + this.resumen + "<p>";
        return resultado;
    }
}

function generarHTMLLibro(libro) {
    var resultado = "<h2>" + this.nombre + "</h2><p>" + this.resumen + "<p>";
    return resultado;
}

var biblioteca = [
    new Libro ("fantastico", "harry potter", "es un niño mago"),
    new Libro ("fantastico", "el señor de los anillos", "hobbys llevando el anillo al volcan"),
    new Libro ("fantastico", "el alquimita", "el alquimista es un libro")
]

