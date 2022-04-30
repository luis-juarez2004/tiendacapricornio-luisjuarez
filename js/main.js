//alert()

/* const MIN_POWER = 30;
const MAX_POWER = 50;

let vidaThanos = 100;
let vidaIronman = 100;

let round = 1;

const calcularGolpe = () => Math.ceil(Math.random()* (MAX_POWER - MIN_POWER) + MIN_POWER)

const tieneEnergia = () => vidaThanos > 0 &&  vidaIronman > 0


const ThanosSigueEnPie = () => vidaIronman < 0


while(tieneEnergia()){

console.log("Round " + round)

let golpeThanos = calcularGolpe();
console.log("Golpe Thanos" + golpeThanos)


let golpeIronman = calcularGolpe();
console.log("Golpe Iron man" + golpeIronman)

if(golpeIronman>golpeThanos){
    vidaThanos -=golpeIronman
}else {
    vidaIronman -=golpeThanos;
}

if(golpeIronman>20 && vidaIronman < 100){
    vidaIronman +=5;
}

if(golpeThanos>20 && vidaThanos){
    vidaThanos +=5;
}

console.log("Vida Iron man" + vidaIronman)
console.log("Vida Thanos" + vidaThanos)

round +=1;
}

if(ThanosSigueEnPie()){
    console.log("Gano Thanos")
}else {
    console.log("Gano Iron man")
}   */

let producto;
let desc = 0 ;
let cant = 0 ;
let precio = 0 ;
let listaProd = [] ;
let precioFinal = 0; 

class Producto {
    constructor (cant, producto, precio){
        this.cant = cant;
        this.producto = producto;
        this.precio = precio;
    }
}

const agregarProd = () => {
    cant = parseInt(prompt("ingrese la cantidad de productos que desea comprar"));
    producto = (prompt("ingrese el nombre del producto"));
    precio = parseInt(prompt("ingrese el precio del producto"));
    let articulo = new Producto (cant, producto, precio);
    listaProd.push(articulo);


for (let articulo of listaProd){
    articulo.precio *= cant; 
    console.log(`Usted a agregado ${articulo.cant} ${articulo.producto} al carrito y el precio total es $${articulo.precio}`)
}
}

agregarProd();