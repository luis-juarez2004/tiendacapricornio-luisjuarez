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
    swal({
        title: "Producto agregado",
        text: "Usted agrego un producto al carrito!",
        icon: "success",
        timer: "1000",
    });
};

let aplicacion = document.querySelector('.noticia')

let noticia = async () => {
    try {
        let noti = await fetch("http://api.mediastack.com/v1/news?access_key=842bee835537d45424ff8040552397f7&language=-es&countries=gb,us")
        let resultado = await noti.json();
        info = resultado.data;
        info.forEach( not => {{ 
        let news = document.createElement("div");
        news.className = "noticia";
        news.innerHTML = `
        <p>${not.title}</p>
        <div>${not.description}</div>
        <a href="${not.url}">Noticia Aqui!!!</a>
        `;
            aplicacion.appendChild(news);
                }
            })
    }catch (error){
        console.log(error);
    }
}
noticia()
