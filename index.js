// callback function

// function vamosBartDiLoTuyo(frase){
//     console.log(frase);
// }


// const frederick = { 
//     nombre: "Frederick",
//     edad: "Infinita" 
// }


// function crearPersona(persona, callback){
//     const resultado = `La persona ${persona.nombre} tiene una edad de ${persona.edad}`
//     callback(resultado);

// }

// crearPersona(frederick, vamosBartDiLoTuyo);


// const persona1 = { 
//     nombre: "Frederick",
//     edad: "Infinita" 
// }
// const persona2 = { 
//     nombre: "Max",
//     edad: "Infinita" 
// }

// function dominicano(persona){
//     console.log(`${persona.nombre} es Dominicano`)
// }

// function venezolano(persona){
//     while (true){
//         console.log('viva chaves!');
//     }
// }


// function manejarNacionalidad(persona, cb){
//     cb(persona);
// }



// manejarNacionalidad(persona1, dominicano)
// manejarNacionalidad(persona2, venezolano)



// function sayMyNameSayMyName(nombre){
//     return nombre;
// }

// const nombres = ["Frederick", "Leonel", "Brian", "Ferlin", "David", "Emmy", "Carlos"];
// For Each

// for(let i = 0; i < nombres.length; i++){
//     const nombreActual = nombres[i]
//     sayMyNameSayMyName(nombreActual);
// }

// nombres.forEach(function(nombre){
//     sayMyNameSayMyName(nombre);
// });


// const resultado = nombres.forEach(nombre => {
//     return sayMyNameSayMyName(nombre);
// });

// console.log(resultado);

// Map
// const resultado = nombres.map(nombre => {
//     if(nombre.length < 5){
//         return `${nombre} es menor`;
//     }
//     return "Nada";
// });
// console.log(resultado);



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

// const invitados_con_permiso = invitados.map((invitado) =>{
//     if(invitado.edad > 18){
//         invitado.puede_beber = true;
//         return invitado;
//     }
//     invitado.puede_beber = false;
//     return invitado;
// });


// Filter

function buscarInvitadoPorNombre(lista_de_invitados, nombre){

    const res = lista_de_invitados.filter(invitado =>{

        if(invitado.nombre.toUpperCase() === nombre.toUpperCase()){
            return invitado;
        }

    })

    return res;
}

console.log(buscarInvitadoPorNombre(invitados, "LeOnEl"));














