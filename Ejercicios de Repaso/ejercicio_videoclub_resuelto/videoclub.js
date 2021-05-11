class Pelicula {
  constructor(anio, nombre, img){
    this.anio=anio;
    this.nombre=nombre;
    this.img=img;
  }
}

var videoclub = [
  new Pelicula("2010","Origen","https://pics.filmaffinity.com/inception-652954101-msmall.jpg"),
  new Pelicula("2010","El árbol de la vida","https://pics.filmaffinity.com/the_tree_of_life-567902094-mmed.jpg"),
  new Pelicula("2012","Django Unchained","https://pics.filmaffinity.com/django_unchained-956246347-mmed.jpg"),
  new Pelicula("2013","El lobo de Wall Street","https://pics.filmaffinity.com/the_wolf_of_wall_street-675195906-mmed.jpg"),
  new Pelicula("2015","Interstellar","https://pics.filmaffinity.com/interstellar-366875261-mmed.jpg"),
  new Pelicula("2015","La isla minima","https://pics.filmaffinity.com/la_isla_minima-276450591-mmed.jpg"),
  new Pelicula("2016","La llegada","https://pics.filmaffinity.com/arrival-150207636-mmed.jpg"),
  new Pelicula("2017","La La Land","https://pics.filmaffinity.com/la_la_land-262021831-mmed.jpg"),
  new Pelicula("2018","Green Book","https://pics.filmaffinity.com/green_book-162451488-mmed.jpg"),
  new Pelicula("2019","Joker","https://pics.filmaffinity.com/joker-790658206-mmed.jpg"),
  new Pelicula("2020","Tenet","https://pics.filmaffinity.com/tenet-432994986-mmed.jpg")
  ];


class UtilVideoclub {
  static generaPeliculaHtml(pelicula){
    return "<h2>" + pelicula.anio + " - " + pelicula.nombre + "</h2><img src='" + pelicula.img + "'>" ;
  }
}
