const canchasintetica = [
    { id: 1, nombre: "Fut 6", tipo: "6 jugadores" },
    { id: 2, nombre: "Fut 8", tipo: "8 jugadores" }
];

let reserva = [];

function agendarReserva(jugador, canchaId, fecha, hora) {
    const cancha = canchasintetica.find(s => s.id === canchaId);
    if (!cancha) {
        return 'Cancha no existente';
    }

    if (reservaExiste(fecha, hora, canchaId)) {
        return 'El horario de la cancha no está disponible';
    }

    const nuevaReserva = {
        id: reserva.length + 1,
        jugador,
        cancha: cancha.nombre,
        fecha,
        hora
    };

    reserva.push(nuevaReserva);
    return `Reserva confirmada para ${jugador} en la cancha ${cancha.nombre}`;
}

function reservaExiste(fecha, hora, canchaId) {
    return reserva.some(r =>
        r.fecha === fecha &&
        r.hora === hora &&
        canchasintetica.find(s => s.nombre === r.cancha)?.id === canchaId
    );
}

function verReservaJugador(jugador) {
    return reserva.filter(r => r.jugador === jugador);
}

function cancelarReserva(reservaId) {
    const index = reserva.findIndex(r => r.id === reservaId);
    if (index === -1) return 'Reserva no encontrada';

    reserva.splice(index, 1);
    return 'Reserva cancelada exitosamente';
}


console.log(agendarReserva('Roland', 1, '2024-12-27', '07:00 PM'));
console.log(verReservaJugador('Roland')); 
console.log(cancelarReserva(1));

