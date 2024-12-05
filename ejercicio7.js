const chivas = [
    { id: 1, nombre: "La Chula", horarios: ["10:00 PM a 2:00 AM ", "11:00 PM a 3:00 AM "], precio: 15 },
    { id: 2, nombre: "La Consentida", horarios: ["9:00 PM a 1:00 AM ", "8:00 PM a 12:00 AM "], precio: 15 }
];

let asientos = [
    { numero: "1", ocupado: false },
    { numero: "2", ocupado: false },
    { numero: "3", ocupado: true },
    { numero: "4", ocupado: false },
    { numero: "5", ocupado: false }
];

let boletas = [];

function verChivas() {
    return chivas.map(c => ({
        nombre: c.nombre,
        horarios: c.horarios
    }));
}

function verAsientosDisponibles() {
    return asientos.filter(a => !a.ocupado);
}

function comprarBoleta(chivaId, horario, asientosSeleccionados) {
    const chiva = chivas.find(c => c.id === chivaId);
    if (!chiva) return "Chiva no existente";
    if (!chiva.horarios.includes(horario)) {
        return "Horario no disponible";
    }
    const asientosValidos = asientosSeleccionados.every(asiento => {
        const asientoExiste = asientos.find(a => a.numero === asiento && !a.ocupado);
        return asientoExiste;
    });
    if (!asientosValidos) return "Asiento no disponible";
    const total = chiva.precio * asientosSeleccionados.length;
  
    asientosSeleccionados.forEach(asiento => {
        const idx = asientos.findIndex(a => a.numero === asiento);
        asientos[idx].ocupado = true;
    });
    const boleta = {
        id: boletas.length + 1,
        chiva: chiva.nombre,
        horario,
        asientos: asientosSeleccionados,
        total
    };
    boletas.push(boleta);
    return boleta;
}


console.log(verChivas());
console.log(verAsientosDisponibles());
console.log(comprarBoleta(1, "11:00 PM a 3:00 AM", ["1", "4"]));
