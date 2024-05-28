function validarFormulario() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const correo = document.getElementById('correo').value.trim();
    
    // Mensaje de resultado
    let mensaje = '';

    // Validaciones
    if (nombre === '' || nombre.length > 50) {
        mensaje += 'El nombre no puede estar vacío y debe tener un máximo de 50 caracteres.<br>';
    }

    if (apellido === '' || apellido.length > 50) {
        mensaje += 'El apellido no puede estar vacío y debe tener un máximo de 50 caracteres.<br>';
    }

    if (isNaN(edad) || edad < 18) {
        mensaje += 'La edad no puede ser negativa y debe ser mayor de edad.<br>';
    }

    if (isNaN(altura) || altura < 0 || altura > 230) {
        mensaje += 'La altura no puede ser negativa y no puede ser mayor a 230 cm.<br>';
    }

    if (correo === '' || !correo.includes('@')) {
        mensaje += 'El correo electrónico no puede estar vacío y debe incluir el "@"<br>';
    }

    document.getElementById('mensaje').innerHTML = mensaje;

    if (mensaje === '') {
        mensaje = 'Formulario enviado exitosamente.';
        document.getElementById('mensaje').innerHTML = mensaje;
    }
}