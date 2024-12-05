const mesas = [
    { numero: 1, tipo: '2 personas', precio: 50000, ocupada: false },
    { numero: 2, tipo: '4 personas', precio: 100000, ocupada: false },
    { numero: 3, tipo: '6 personas', precio: 150000, ocupada: false }
   ];
   
  
   let reservas = [];
   

   function reservarMesa(numeroMesa, comenzal, horaIngreso, horaSalida) {
    
    const mesa = mesas.find(m => m.numero === numeroMesa);
   
    if (!mesa) {
   
        return `La mesa ${numeroMesa} no existe en el restaurante`;
    
    }
   
    if (mesa.ocupada) {
    
        return `La mesa ${numeroMesa} ya esta ocupada`;
    
    }
   
    mesa.ocupada = true;
   
    const nuevaReserva = {
    id: reservas.length + 1,
    mesa: numeroMesa,
    comenzal,
    horaIngreso,
    horaSalida
    };
   
    reservas.push(nuevaReserva);
    
    return `tienes una reserva  para ${comenzal} en la mesa ${numeroMesa}`;
   }
   
   
   function verDisponibles() {
    
    return mesas.filter(m => !m.ocupada);
   }
   
 
   function cancelarReserva(numeroMesa) {
    
    const mesa = mesas.find(m => m.numero === numeroMesa);
   
    if (!mesa) {
    
    return `La mesa ${numeroMesa} no existe en el restaurante`;
    }
   
    if (!mesa.ocupada) {
    
    return `La mesa ${numeroMesa} esta disponible`;
    }
   
    mesa.ocupada = false;
    reservas = reservas.filter(r => r.mesa !== numeroMesa);
    return `la reserva para la mesa numero ${numeroMesa} fue cancelada`;
   }
   
   

   console.log(reservarMesa(1, "Luisa Ospina", "2024-12-24 - 6:30 PM", "2024-12-24 - 8:30"));
   