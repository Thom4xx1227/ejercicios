let carrito= [
    {nombre: "televisor", precio: 200000, cantidad: 2},
    {nombre: "telefono" , precio: 500000, cantidad: 3},
    {nombre: "reloj" , precio: 15000, cantidad: 1},
    {nombre: "consola" , precio: 220000, cantidad: 2},
    {nombre: "parlante", precio: 22000, cantidad: 1 }
]

const calcularproductos = (productos) => {
    return productos.reduce((total, producto) => {
        const subtotal = producto.precio * producto.cantidad;
        return total + subtotal;
    }, 0);
}

const total =  calcularproductos (carrito);
//console.log ( "productos en carrito", carrito)
//console.log ("valor a pagar: $" + total)

for (let i = 0; i < carrito.length; i++) {
    //console.log (carrito[i].nombre)
    


console.log ( "productos en carrito", carrito [i].nombre);

}
console.log ("valor a pagar: $" + total)