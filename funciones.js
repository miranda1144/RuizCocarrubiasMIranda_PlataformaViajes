const listaDestinos = [
    {
        nombre: "Cancún",
        pais: "México",
        descripcion: "Playas de arena blanca y aguas cristalinas.",
        precio: "$899 USD",
        imagen: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?auto=format&fit=crop&w=600&q=80"
    },
    {
        nombre: "Cusco",
        pais: "Perú",
        descripcion: "Explora la ciudadela de Machu Picchu y la cultura Inca.",
        precio: "$750 USD",
        imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=600&q=80"
    },
    {
        nombre: "París",
        pais: "Francia",
        descripcion: "La ciudad del amor, arte y gastronomía de clase mundial.",
        precio: "$1,200 USD",
        imagen: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80"
    }
];

function renderizarDestinos() {
    const contenedor = document.getElementById('contenedor-destinos');
    contenedor.innerHTML = ""; 
    
    listaDestinos.forEach(item => {
        const html = `
            <div class="col-md-4">
                <div class="card h-100 card-destino shadow-sm">
                    <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
                    <div class="card-body">
                        <span class="badge bg-primary mb-2">${item.pais}</span>
                        <h5 class="card-title fw-bold">${item.nombre}</h5>
                        <p class="card-text text-muted">${item.descripcion}</p>
                        <p class="precio-tag text-primary fw-bold">${item.precio}</p>
                        <a href="#reservas" class="btn btn-outline-primary btn-sm">Ver detalles</a>
                    </div>
                </div>
            </div>
        `;
        contenedor.innerHTML += html;
    });
}

document.getElementById('reservaForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    console.log("Reserva solicitada por: " + nombre);

    // Asegúrate de que el ID coincida con el de tu HTML
    const alerta = document.getElementById('mensajeEnvio');
    if(alerta) {
        alerta.classList.remove('d-none');
    }
    
    this.reset();
});

document.addEventListener('DOMContentLoaded', renderizarDestinos);