//creacion de clase 

class Asignatura {
    constructor(codigo, nombre, horas, recursos, curso) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.horas = horas;
        this.recursos = recursos;
        this.curso = curso;
    }
}

//clase heredada de las clase Asignatura

class AsignaturaInformatica extends Asignatura {
    constructor(codigo, nombre, horas, recursos, curso, tecnologias) {
        super(codigo, nombre, horas, recursos, curso)
        this.tecnologias = tecnologias;
    }
}

//clase heredada de las clase Asignatura

class FTC extends Asignatura {
    constructor(codigo, nombre, horas, recursos, curso, empresas) {
        super(codigo, nombre, horas, recursos, curso)
        this.empresas = empresas;
    }
}

// variables globales

tecnologiasDWEC = ["HTML", "javascript"];
tecnologiasDIW = ["HTML", "CSS"];

// Asignaturas de primero

var SI = new AsignaturaInformatica(
    "SI",
    "Sistemas informaticos", 100,
    ""
)

// Asignaturas de segundo

var DWEC = new AsignaturaInformatica(
    "DWEC", "desarrollo web entorno cliente", 165, ['http://www.w3schools.com/js/DEFAULT.asp', 'http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'], 2, tecnologiasDWEC
);

var DIW = new AsignaturaInformatica(
    "DIW", "Diseño de interfaces web", 165, ['http://www.w3schools.com/w3css/defaulT.asp', 'http://developer.mozilla.org/en-US/docs/Web/CSS/Reference', ], 2, tecnologiasDIW
);

var