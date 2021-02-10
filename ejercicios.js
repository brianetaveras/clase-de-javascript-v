let movies = [
    {
      id: 0,
      titulo: "The Godfather",
      director: "Francis Ford Coppola",
      rating: 100,
      cast: ["Marlon Brando", "Al Pacino", "Robert Duvall"],
      año: 2007,
      edad: 13
    },
    {
      id: 1,
      titulo: "Star Wars",
      director: "George Lucas",
      rating: 92,
      cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      año: 1977,
      edad: 18
    },
    {
      id: 2,
      titulo: "The Lord of the Rings: The Fellowship of the Ring",
      director: "Peter Jackson",
      rating: 92,
      cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      año: 2001,
      edad: 13
    },
    {
      id: 3,
      titulo: "Terminator 2: Judgement Day",
      director: "James Cameron",
      rating: 94,
      cast: ["Arnold Schwarzenegger", "Edward Furlong", "Linda Hamilton"],
      año: 2017,
      edad: 18
    },
    {
      id: 4,
      titulo: "Dumb and Dumber",
      director: "The Farely Brothers",
      rating: 76,
      cast: ["Jim Carrey", "Jeff Daniels", "Lauren Holly"],
      año: 1994,
      edad: 18
    },
    {
      id: 5,
      titulo: "Tombstone",
      director: "George P. Cosmatos",
      rating: 89,
      cast: ["Kurt Russell", "Bill Paxton", "Sam Elliot"],
      año: 1993,
      edad: 13
    }
  ];


// Tarea 1;
// Utilizaremos la pelicula Tombstone en este ejemplo. Por cada pelicula, imprime
// en la consola lo qeuivalente a lo siguiente:

// Tomstone fue dirigida por George P. Cosmatos
// La pelicula fue lanzada en el año 1993
// El elenco de el film incluye:
// 1 - Kurt Russel
// 2 - Bill Paxton
// 3 - Sam Elliot

  

// Tarea 2;
// Escribe una función que devuelva un array con las peliculas lanzadas después de un año específico
// Ejemplo buscarPelisDespuesDe(peliculas, 2003);


// Tarea 3: Escribe una función que evalue la edad de los invitados y devuelva un array
// cons los invitados y la propiedad "es_apto". La edad debe evaluar a la lista de peliculas
// junto a la lista de invitados
// Ejemplo [{nombre: "Frederick", edad: 27, es_apto: true}]
const invitados = [
    {
        nombre: "Frederick",
        edad: 27,
    },
    {
        nombre: "Max",
        edad: 17,
    },
    {
        nombre: "Osiris",
        edad: 47,
    },
    {
        nombre: "Leonel",
        edad: 16,
    },
    {
        nombre: "Antonio",
        edad: 22,
    },
]



// Pregunta opcional que te hará crecer el bigote!!!

// Escribe una función que busque peliculas utilizando el título. 
// Lo que hace esta función diferente es que buscaremos palabras 
// dentro de el título. Por ejemplo, buscamos "God", la película "The Godfather"

// Tip: Pueden leer sobre el método includes() 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes