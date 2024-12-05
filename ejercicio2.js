const besibolistas = [
    {nombre: "pedro", puntos: 2.5},
    {nombre: "fabian", puntos: 2.1},
    {nombre: "yerladin", puntos: 3.5},
    {nombre: "sofia", puntos: 4.0},
    {nombre: "edeiber", puntos: 2.1}
];

const baprobado = besibolistas

.filter(besibolista=> besibolista.puntos >= 3.0)
.map(besibolista => besibolista.nombre)

console.log ( "besibolistas con buen desempeño =" , baprobado)