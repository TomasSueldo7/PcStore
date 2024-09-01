// Función para guardar el producto en localStorage
function saveProduct(titulo, descripcion, urlImagen, precio, colorFondo, colorBorde) {
  const productos = JSON.parse(localStorage.getItem('productos')) || [];
  productos.unshift({ titulo, descripcion, urlImagen, precio, colorFondo, colorBorde });
  localStorage.setItem('productos', JSON.stringify(productos));
}

// Función para validar que el precio sea un número no negativo
function validatePrice(priceInput) {
  const precio = parseFloat(priceInput.value);
  if (isNaN(precio) || precio <= 0) {
    priceInput.style.borderColor = 'red';
    return false;
  } else {
    priceInput.style.borderColor = '';
    return true;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const formAgregarProducto = document.getElementById('form-agregar-producto');
  const precioInput = document.getElementById('precio');

  formAgregarProducto.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validación del precio
    if (!validatePrice(precioInput)) {
      document.getElementById('precio').style.borderColor = 'red';
      return;
    } else {
      document.getElementById('precio').style.borderColor = '';
    }

    // Obtener valores del formulario
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value || 'Sin descripción disponible';
    const urlImagen = document.getElementById('urlImagen').value || '../../Assets/IconPc.jpg';
    const precio = document.getElementById('precio').value;
    const colorFondo = document.getElementById('colorFondo').value;
    const colorBorde = document.getElementById('colorBorde').value;

    // Mostrar información en la consola
    console.log({
      titulo: titulo, 
      descripción: descripcion, 
      imagen: urlImagen, 
      precio: precio, 
      backgroundColor: colorFondo, 
      borderColor: colorBorde
    });

    // Guardar el producto en localStorage
    saveProduct(titulo, descripcion, urlImagen, precio, colorFondo, colorBorde);

    // Redirigir a la página de promociones
    window.location.href = '../../Components/Promotions/promotions.html';
  });
});
