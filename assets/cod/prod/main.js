"use strict";

// Definición de la interfaz Producto

// Variable para almacenar los productos en el carrito
var carrito = [];

// Función para mostrar una notificación de éxito al agregar un producto al carrito
function mostrarNotificacion(mensaje) {
  // Crea un elemento de notificación
  var notificacion = document.createElement('div');
  notificacion.classList.add('alert', 'alert-success', 'position-fixed', 'top-0', 'start-50', 'translate-middle-x');
  notificacion.textContent = mensaje;

  // Agrega la notificación al DOM
  document.body.appendChild(notificacion);

  // Desaparece la notificación después de 3 segundos
  setTimeout(function () {
    notificacion.remove();
  }, 3000);
}

// Función para actualizar la cantidad de productos en el icono del carrito
function actualizarCantidadCarrito(cantidad) {
  // Encuentra el elemento del icono del carrito
  var iconoCarrito = document.getElementById('icono-carrito');

  // Actualiza el texto del icono del carrito con la cantidad actualizada
  if (iconoCarrito) {
    iconoCarrito.textContent = cantidad.toString();
  }
}

// Obtén todos los botones "Agregar al carrito"
var botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');

// Agrega un listener de evento clic a cada botón
botonesAgregarCarrito.forEach(function (boton) {
  boton.addEventListener('click', function () {
    // Obtén el nombre y precio del producto desde los atributos data del botón
    var nombre = boton.getAttribute('data-nombre');
    var precioString = boton.getAttribute('data-precio');

    // Verifica si el precioString es nulo o indefinido antes de convertirlo a número
    if (precioString) {
      var precio = parseFloat(precioString);

      // Crea un objeto Producto con la información obtenida
      var nuevoProducto = {
        nombre: nombre || "",
        precio: precio
      };

      // Agrega el producto al carrito
      carrito.push(nuevoProducto);

      // Actualiza la interfaz del carrito mostrando una notificación de éxito
      mostrarNotificacion('Producto añadido al carrito');

      // Actualiza la cantidad de productos en el icono del carrito
      actualizarCantidadCarrito(carrito.length);
    } else {
      console.error('El atributo data-precio no está presente en el botón.');
    }
  });
});

// Obtén el botón flotante para el carrito de compra
// const botonCarrito = document.querySelector('.boton-carrito-fijo');

// // Agrega un listener de evento clic al botón flotante
// botonCarrito?.addEventListener('click', () => {
//     // Obtén el elemento del modal
//     const modalCarrito = new bootstrap.Modal(document.getElementById('modalCarrito')!);

//     // Limpia la lista de productos en el modal antes de agregar los nuevos
//     const listaProductos = document.getElementById('listaProductos')!;
//     listaProductos.innerHTML = '';

//     // Calcula el precio total a pagar
//     let totalPagar = 0;

//     // Recorre los productos en el carrito y muestra cada uno en el modal
//     carrito.forEach(producto => {
//         // Crea un elemento de lista para cada producto
//         const listItem = document.createElement('li');
//         listItem.classList.add('list-group-item');
//         listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
//         listaProductos.appendChild(listItem);

//         // Agrega el precio del producto al total a pagar
//         totalPagar += producto.precio;
//     });

//     // Muestra el precio total a pagar en el modal
//     const spanTotalPagar = document.getElementById('totalPagar')!;
//     spanTotalPagar.textContent = `$${totalPagar.toFixed(2)}`;

//     // Muestra el modal
//     modalCarrito.show();
// });

// Obtén el botón "Comprar" del modal
// const botonComprar = document.getElementById('boton-comprar');

// // Agrega un listener de evento clic al botón "Comprar"
// botonComprar?.addEventListener('click', () => {
//     // Muestra una alerta con el mensaje de compra exitosa
//     alert('Compra exitosa');
// });

// Función para mostrar el contenido del carrito en el modal
function mostrarContenidoCarrito() {
  // Obtén el elemento del modal
  var modalCarrito = new bootstrap.Modal(document.getElementById('modalCarrito'));

  // Limpia la lista de productos en el modal antes de agregar los nuevos
  var listaProductos = document.getElementById('listaProductos');
  listaProductos.innerHTML = '';

  // Calcula el precio total a pagar
  var totalPagar = 0;

  // Recorre los productos en el carrito y muestra cada uno en el modal
  carrito.forEach(function (producto, index) {
    // Crea un elemento de lista para cada producto
    var listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

    // Contenido del producto
    listItem.innerHTML = "\n            <div>\n                ".concat(producto.nombre, " - $").concat(producto.precio.toFixed(2), "\n            </div>\n            <div>\n                <button class=\"btn btn-danger btn-sm\" onclick=\"eliminarProducto(").concat(index, ")\">Eliminar</button>\n            </div>\n        ");

    // Agrega el elemento de lista al DOM
    listaProductos.appendChild(listItem);

    // Agrega el precio del producto al total a pagar
    totalPagar += producto.precio;
  });

  // Muestra el precio total a pagar en el modal
  var spanTotalPagar = document.getElementById('totalPagar');
  spanTotalPagar.textContent = "$".concat(totalPagar.toFixed(2));

  // Muestra el modal
  modalCarrito.show();
}

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
  carrito.splice(index, 1); // Elimina el producto del array carrito
  mostrarNotificacion('Producto eliminado del carrito'); // Muestra una notificación
  actualizarCantidadCarrito(carrito.length); // Actualiza la cantidad de productos en el carrito
  mostrarContenidoCarrito(); // Actualiza el contenido del modal del carrito
}

// Función para realizar la compra
function realizarCompra() {
  // Lógica para realizar la compra...
  carrito.length = 0; // Vacía el carrito

  actualizarCantidadCarrito(0); // Actualiza la cantidad de productos en el carrito

  mostrarNotificacion('Compra realizada con éxito'); // Muestra una notificación
}

// Obtén el botón "Comprar" del modal
var botonComprar = document.getElementById('boton-comprar');

// Agrega un listener de evento clic al botón "Comprar"
botonComprar === null || botonComprar === void 0 || botonComprar.addEventListener('click', realizarCompra);

// Obtén el botón flotante para el carrito de compra
var botonCarrito = document.querySelector('.boton-carrito-fijo');

// Agrega un listener de evento clic al botón flotante
botonCarrito === null || botonCarrito === void 0 || botonCarrito.addEventListener('click', mostrarContenidoCarrito);
document.addEventListener('DOMContentLoaded', function () {
  var modalElems = document.querySelectorAll('.modal');
  modalElems.forEach(function (modal) {
    modal.addEventListener('hidden.bs.modal', function () {
      document.body.classList.remove('modal-open');
      var modalBackdrops = document.querySelectorAll('.modal-backdrop');
      modalBackdrops.forEach(function (backdrop) {
        backdrop.remove();
      });
    });
  });
});