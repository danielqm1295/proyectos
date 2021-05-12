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
    "SI", "Sistemas informaticos", 100, ["https://www.cesareox.com/docencia/simm/"], 1, ["Windows", "Apple", "linux"]
);

var BB = new AsignaturaInformatica(
    "BB", "Base de Datos", 105, ["https://www.udima.es/es/bases-de-datos.html"], 1, ["Mysql", "entidad-relacion"]
);

var PRO = new AsignaturaInformatica(
    "PRO", "Programacion", 135, ["https://www.udima.es/es/fundamentos-programacion.html"], 1, "java"
);

var LMSGI = new AsignaturaInformatica(
    "LMSGI", "lenguaje de marcas y sistemas de gestion de informacion", 70, ["https://www.ticarte.com/contenido/lenguajes-de-marcas-y-sistemas-de-gestion-de-informacion"], 1, ["HTML", "CSS", "Javascript"]
);

var ED = new AsignaturaInformatica(
    "ED", "Entornos de desarrollo", 50, ["https://es.wikipedia.org/wiki/Entorno_de_desarrollo_integrado"], 1, "frameworks"
);

var FOL = new Asignatura(
    "FOL", "Formacion y orientacion profesional", 25, ["https://www.cfireinaisabel.com/noticias/que-es-fol"], 1
);

// Asignaturas de segundo

var DWEC = new AsignaturaInformatica(
    "DWEC", "desarrollo web entorno cliente", 80, ['http://www.w3schools.com/js/DEFAULT.asp', 'http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference'], 2, tecnologiasDWEC
);

var DIW = new AsignaturaInformatica(
    "DIW", "Diseño de interfaces web", 80, ['http://www.w3schools.com/w3css/defaulT.asp', 'http://developer.mozilla.org/en-US/docs/Web/CSS/Reference', ], 2, tecnologiasDIW
);

var DAW = new AsignaturaInformatica(
    "DAW", "Despliegue de aplicaciones web", 50, ["https://iessanvicente.com/iconsultas/gestionIES/programaciones_pdf.php?idMateria=66"], 2, ["github", "docker"]
);

var EIE = new Asignatura(
    "EIE", "Empresa e iniciativa emprendedora", 25, ["http://www.valnaloneduca.com/eie/cont/presentacion"], 2
);

var PDAW = new AsignaturaInformatica(
    "PDAW", "Proyecto de desarrollo de aplicaciones web", 40, ["https://fp.ucam.edu/sites/fp.ucam.edu/files/DAW/pd4dwp_-_proyecto_de_desarrollo_de_aplicaciones_web19a.pdf"], 2, ["javascript", "php"]
);

var FCT = new FTC(
    "FTC", "Formacion en centros de trabajo", 400, ["https://www.todofp.es/sobre-fp/formacion-en-centros-de-trabajo.html"], 2, "Sofical"
);

var asignaturas = new Array(SI, BB, PRO, LMSGI, ED, FOL, DWEC, DIW, DAW, EIE, PDAW, FCT);