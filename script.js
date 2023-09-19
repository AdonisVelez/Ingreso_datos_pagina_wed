document.addEventListener('DOMContentLoaded', function() {
    const clienteForm = document.getElementById('clienteForm');
    const listaClientes = document.getElementById('listaClientes');

    clienteForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const cedula = document.getElementById('cedula').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;

        // Crear una nueva tarjeta para mostrar los datos del cliente
        const newCard = document.createElement('div');
        newCard.classList.add('cliente-card');
        newCard.innerHTML = `
            <h3>${nombre} ${apellido}</h3>
            <p><strong>Cédula:</strong> ${cedula}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
        `;

        // Agregar la tarjeta a la lista de clientes
        listaClientes.appendChild(newCard);

        // Limpia el formulario
        clienteForm.reset();
    });
});



