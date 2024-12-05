
const libros = [
    { id: 1, Titulo: 'Cronicas de una muerte anunciada', Autor: 'Gabriel Garcia Marquez', disponible: true},
    { id: 2, Titulo: 'Satanas', Autor: 'Mario Mendoza', disponible: true }
];


let transacciones = [];

function consultarDisponibilidad(libroId) {
    const libro = libros.find(l => l.id === libroId);
    return libro ? (libro.disponible ? 'Disponible' : 'No disponible') : 'Libro no encontrado';
}

function prestarLibro(libroId, usuario) {
    const libro = libros.find(l => l.id === libroId);
    if (!libro) return 'Libro no encontrado';
    if (!libro.disponible) return 'Libro no disponible';

    libro.disponible = false;
    registrarTransaccion(libroId, 'prestamo', usuario);
    return `Libro prestado exitosamente a ${usuario}`;
}

function devolverLibro(libroId, usuario) {
    const libro = libros.find(l => l.id === libroId);
    if (!libro) return 'Libro no encontrado';
    if (libro.disponible) return 'El libro ya está disponible';

    libro.disponible = true;
    registrarTransaccion(libroId, 'devolucion', usuario);
    return `Libro devuelto exitosamente por ${usuario}`;
}

function registrarTransaccion(libroId, tipo, usuario) {
    transacciones.push({
        fecha: new Date().toISOString(),
        libroId,
        tipo,
        usuario
    });
}

// Pruebas
console.log(consultarDisponibilidad(1));
console.log(prestarLibro(1, 'Juan'));
console.log(consultarDisponibilidad(1));
console.log(devolverLibro(1, 'Juan'));
console.log(consultarDisponibilidad(1));
console.log(transacciones);