// Cargar productos desde localStorage
function loadProducts() {
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const cardsContainer = document.querySelector('.cards-container');

    if (cardsContainer) {
        productos.forEach((producto, index) => {
            const nuevaTarjeta = `
                <div class="card" data-index="${index}" style="background-color: ${producto.colorFondo}; border: 2px solid ${producto.colorBorde};">
                    <img src="${producto.urlImagen}" alt="Producto agregado">
                    <div class="card-body">
                        <h2>${producto.titulo}</h2>
                        <h2>Precio: $ ${producto.precio}</h2>
                        <p>${producto.descripcion}</p>
                        <button class="btn-agregar">Agregar al carrito</button>
                        <div class="card-controls">
                            <input type="color" class="background-color-picker" value="${producto.colorFondo}">
                            <input type="color" class="border-color-picker" value="${producto.colorBorde}">
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.insertAdjacentHTML('afterbegin', nuevaTarjeta);
        });

        // Agregar eventos a los nuevos controles
        document.querySelectorAll('.background-color-picker').forEach(input => {
            input.addEventListener('input', function() {
                const card = this.closest('.card');
                card.style.backgroundColor = this.value;
                updateProductInLocalStorage(card, 'colorFondo', this.value);
            });
        });

        document.querySelectorAll('.border-color-picker').forEach(input => {
            input.addEventListener('input', function() {
                const card = this.closest('.card');
                card.style.borderColor = this.value;
                updateProductInLocalStorage(card, 'colorBorde', this.value);
            });
        });
    } else {
        console.log('El contenedor de tarjetas no existe en esta página.');
    }
}

// Actualizar un producto en localStorage
function updateProductInLocalStorage(card, field, value) {
    const index = card.getAttribute('data-index');
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    productos[index][field] = value;
    localStorage.setItem('productos', JSON.stringify(productos));
}
  
// Llamar a loadProducts() en la carga de la página
document.addEventListener('DOMContentLoaded', function() {

      // Seleccionar todas las tarjetas y los inputs para los colores
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    const bgColorInput = card.querySelector('.bg-color');
    const borderColorInput = card.querySelector('.border-color');
    
    // Aplicar los colores seleccionados
    bgColorInput.addEventListener('input', (event) => {
      card.style.backgroundColor = event.target.value;
    });
    
    borderColorInput.addEventListener('input', (event) => {
      card.style.borderColor = event.target.value;
    });
  });
    // Navegación para la tarjeta "Agregar un producto"
    const agregarProductoButton = document.getElementById('agregarProducto');
    if (agregarProductoButton) {
        agregarProductoButton.addEventListener('click', function() {
        window.location.href = '/Components/AddProducts/addProduct.html';
        });
    }

    loadProducts();

    // Aplicar efectos a las tarjetas
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.classList.add('hovered');
        });
        card.addEventListener('mouseout', function() {
            this.classList.remove('hovered');
        });
    });
});