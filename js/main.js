/* let boton1 = document.querySelector("#boton1");

boton1.addEventListener("click", agregado);

let boton2 = document.querySelector("#boton2");

boton2.addEventListener("click", agregado);

let boton3 = document.querySelector("#boton3");

boton3.addEventListener("click", agregado);

function agregado (agr) {
    agr.preventDefault();

    console.log("producto agregado");

    let carrito = [];

    const agregar = {
        id: Date.now(),
        texto: boton1, 
        texto2: boton2,
        texto3: boton3,
    }

carrito.push(agregar)

console.log(carrito);
} */

const botones = document.querySelectorAll('.addCarrito');

botones.forEach(agregarCarta => {
    agregarCarta.addEventListener('click', agregarCartaClick)
});

const elementoCarta = document.querySelector('.container');

function agregarCartaClick(event) {
    const button = event.target;
    
    const item = button.closest('.card');

    const itemTitle = item.querySelector('.titulo').textContent;

    const itemPrecio = item.querySelector('.precio').textContent;

    const itemImagen = item.querySelector('.imagen').src;

    agregarCarrito(itemTitle, itemPrecio, itemImagen);
} 

function agregarCarrito (itemTitle, itemPrecio, itemImagen){
    const element = document.createElement('div');
    element.setAttribute('class', 'prod');
    const carro = `
        <img src=${itemImagen} class="card-img-top imagen">
        <h5 class="card-title titulo" id="title">${itemTitle}</h5>
        <p class="card-text precio" id="price">${itemPrecio}</p>`;
    element.innerHTML = carro
    elementoCarta.append(element);
    const strJSON= JSON.stringify(carro);
    localStorage.setItem("producto", strJSON);
}

