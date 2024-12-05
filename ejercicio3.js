const ventasjugadores  = [
    {jugador: "Luis", categoria: "delantero", monto: 5000000},
    {jugador: "Omar", categoria: "defensa", monto: 2500000},
    {jugador: "Lucas", categoria: "delantero", monto: 3200000},
    {jugador: "Santiago", categoria: "defensa", monto: 10000000},
    {jugador: "Pipe", categoria: "defensa", monto: 1200000},
    {jugador: "David", categoria: "delantero", monto: 1000000},
    {jugador: "Ramos", categoria: "defensa", monto: 2000000},
    {jugador: "Ospina", categoria: "defensa", monto: 1700000}
    ];
    const ventasJugadoresPorCategoria = ventasjugadores.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
    }, {});
    console.log("Ventas por categoría:", ventasJugadoresPorCategoria);