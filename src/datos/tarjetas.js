function tarjetasEjemplo() {
    let tarjetas = [];

    tarjetas.push({
        titulo: "Fútbol",
        descripcion: "El fútbol​ es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno y algunos árbitros que se ocupan de que las normas se cumplan correctamente.",
        imagen: "https://estaticos.muyinteresante.es/uploads/images/dossier/555f4f41582c75822962ee91/futbol1.jpg",
        fecha: new Date(2021,2,23,18,30,0)
    });

    tarjetas.push({
        titulo: "MotoGP",
        descripcion: "MotoGP es la máxima categoría del Campeonato del Mundo de Motociclismo, considerado el certamen internacional más importante en el ámbito de motociclismo de velocidad.",
        imagen: "https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2020/07/cuando-empieza-motogp-2020-1991583.jpg",
        fecha: new Date(2021,2,23,18,31,0)
    });

    tarjetas.push({
        titulo: "Baloncesto",
        descripcion: "El baloncesto o simplemente básquet, ​ es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno durante cuatro períodos o cuartos de diez​ o doce minutos cada uno.",
        imagen: "https://conceptodefinicion.de/wp-content/uploads/2015/07/Baloncesto.jpg",
        fecha: new Date(2021,2,23,18,32,0)
    });

    tarjetas.push({
        titulo: "Natación",
        descripcion: "La natación es el movimiento y el desplazamiento a través del agua mediante el uso de las extremidades corporales y por lo general sin utilizar ningún instrumento o apoyo para avanzar.",
        imagen: "https://static3.abc.es/media/bienestar/2020/05/26/natacion-koQB--1200x630@abc.jpg",
        fecha: new Date(2021,2,23,18,33,0)
    });

    return tarjetas;
}

export default tarjetasEjemplo;
