// Definición de la interfaz Producto
interface Producto {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

// Función para obtener productos de la Fake Store API
async function obtenerProductos(): Promise<Producto[]> {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
}

// Función para filtrar los productos electrónicos
function filtrarProductosElectronicos(productos: Producto[]): Producto[] {
    return productos.filter(producto => producto.category === 'electronics');
}

// Función para mostrar los productos en la página web
function mostrarProductosEnPagina(productos: Producto[]) {
    const contenedor = document.getElementById('productos-contenedor');

    if (contenedor) {
        contenedor.innerHTML = ''; // Limpiar contenedor

        productos.forEach(producto => {
            const claseEspecial = (producto.id === 9 || producto.id === 12) ? `producto-${producto.id}` : '';
            const productoHTML = `
                <div class="col-md-4 d-flex flex-column justify-content-center align-content-center align-items-center">
                    <div class="card mb-4 d-flex flex-column justify-content-center align-content-center align-items-center">
                        <img src="${producto.image}" class="card-img-top ${claseEspecial}" alt="${producto.title}">
                        <div class="card-body d-flex flex-column justify-content-center align-content-center align-items-center">
                            <h5 class="card-title">${producto.title}</h5>
                            <p class="card-text">${producto.description}</p>
                            <p class="card-text text-success fs-1">$${producto.price}</p>
                        </div>
                    </div>
                </div>
            `;
            contenedor.insertAdjacentHTML('beforeend', productoHTML);
        });
    }
}

// Función para inicializar la página con productos electrónicos
async function inicializarPaginaConProductosElectronicos() {
    const productos = await obtenerProductos();
    const productosElectronicos = filtrarProductosElectronicos(productos);
    mostrarProductosEnPagina(productosElectronicos);
}

// Ejecutar la función de inicialización cuando se cargue la página
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.includes('productos.html')) {
        inicializarPaginaConProductosElectronicos();
    }
});
