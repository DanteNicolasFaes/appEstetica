const usersDatabase = {
    'medico1': { password: 'Password1', role: 'medico' },
    'recepcionista1': { password: 'password1', role: 'recepcionista' }, 
};

document.addEventListener('DOMContentLoaded', function() {
    const botonCrearPaciente = document.getElementById('crearPaciente');

    botonCrearPaciente.addEventListener('click', function() {
        mostrarFormularioPaciente();
    });

    function mostrarFormularioPaciente() {
        const formularioPaciente = document.getElementById('patient-form');
        formularioPaciente.style.display = 'block';
        
        // Crear botón "Cerrar" solo si no existe
        let botonCerrar = document.getElementById('cerrarFormulario');
        if (!botonCerrar) {
            botonCerrar = document.createElement('button');
            botonCerrar.textContent = 'Cerrar';
            botonCerrar.id = 'cerrarFormulario';
            
            // Añadir event listener para cerrar el formulario al hacer clic en "Cerrar"
            botonCerrar.addEventListener('click', function() {
                formularioPaciente.style.display = 'none';
                // Eliminar el botón "Cerrar" después de cerrar el formulario
                botonCerrar.remove();
            });
            
            // Insertar el botón "Cerrar" al lado del botón "Crear Paciente"
            botonCrearPaciente.insertAdjacentElement('afterend', botonCerrar);
        }
    }
});
// Función para buscar al paciente por DNI

//SIMULO BASE DE DATOS PACIENTES
const listaPacientes = [
    { dni: '12345678A', nombre: 'Juan', apellido: 'Pérez', edad: 30 },
    { dni: '23456789B', nombre: 'María', apellido: 'Gómez', edad: 25 },
    { dni: '34567890C', nombre: 'Pedro', apellido: 'Martínez', edad: 35 }
];

function buscarPacientePorDNI() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();

    // Verificar si el campo de búsqueda está vacío
    if (!dniABuscar) {
        alert("Por favor ingrese un DNI válido.");
        return;
    }

    // Buscar al paciente por su DNI dentro de la lista de pacientes
    const pacienteEncontrado = listaPacientes.find(paciente => paciente.dni === dniABuscar);

    // Verificar si se encontró al paciente
    if (pacienteEncontrado) {
        // Mostrar los detalles del paciente
        alert(`Paciente encontrado:\nNombre: ${pacienteEncontrado.nombre}\nApellido: ${pacienteEncontrado.apellido}\nEdad: ${pacienteEncontrado.edad}`);
    } else {
        // Si no se encuentra, mostrar un mensaje de error
        alert(`No se encontró ningún paciente con el DNI: ${dniABuscar}`);
    }
}



// Función para abrir la ventana de búsqueda del paciente al hacer clic en "Comprobante de atención"
document.getElementById('comprobanteAtencion').addEventListener('click', function() {
    // Abrir una nueva ventana para buscar al paciente por su DNI
    const ventanaBusqueda = window.open('buscar_paciente.html', '_blank', 'width=600,height=400');
});

// Función para llenar los datos del paciente en el formulario de comprobante de atención
function llenarDatosPaciente(datosPaciente) {
    // Llenar los campos del formulario con los datos del paciente
    document.getElementById('nombre').value = datosPaciente.nombre || '';
    document.getElementById('apellido').value = datosPaciente.apellido || '';
    document.getElementById('documento').value = datosPaciente.documento || '';
    document.getElementById('fechaNacimiento').value = datosPaciente.fechaNacimiento || '';
    document.getElementById('nacionalidad').value = datosPaciente.nacionalidad || '';
    document.getElementById('genero').value = datosPaciente.genero || '';
    document.getElementById('estadoCivil').value = datosPaciente.estadoCivil || '';
    document.getElementById('ocupacion').value = datosPaciente.ocupacion || '';
    document.getElementById('domicilio').value = datosPaciente.domicilio || '';
    document.getElementById('codigoPostal').value = datosPaciente.codigoPostal || '';
    document.getElementById('paisDeResidencia').value = datosPaciente.paisDeResidencia || '';
    document.getElementById('correo').value = datosPaciente.correo || '';
    document.getElementById('telefono').value = datosPaciente.telefono || '';
    document.getElementById('medicoCabecera').value = datosPaciente.medicoCabecera || '';
    document.getElementById('OsPrepaga').value = datosPaciente.OsPrepaga || '';
    document.getElementById('planDeOsPrepaga').value = datosPaciente.planDeOsPrepaga || '';
    document.getElementById('NumeroAfiliado').value = datosPaciente.NumeroAfiliado || '';
    document.getElementById('comoLlegoANosotros').value = datosPaciente.comoLlegoANosotros || '';
    document.getElementById('modoDeContacto').value = datosPaciente.modoDeContacto || '';
}




// Función para generar el comprobante
function generarComprobante() {
    // Aquí puedes implementar la lógica para guardar el comprobante generado
    alert('Comprobante generado con éxito');
}

// Función para cerrar la ventana
function cerrarVentana() {
    window.close();
}

//buscar paciente en ventana emergente

document.getElementById('comprobanteAtencion').addEventListener('click', function() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();
    // Abrir la ventana buscar_paciente.html y pasar el DNI como parámetro
    const ventanaBusqueda = window.open(`buscar_paciente.html?dni=${dniABuscar}`, '_blank', 'width=600,height=400');
});

// Función para buscar al paciente por DNI
function buscarPacientePorDNI() {
    const dniABuscar = document.getElementById('buscarPorDNI').value.trim();

    // Verificar si el campo de búsqueda está vacío
    if (!dniABuscar) {
        alert("Por favor ingrese un DNI válido.");
        return;
    }

    // Buscar al paciente por su DNI dentro de la lista de pacientes
    const pacienteEncontrado = listaPacientes.find(paciente => paciente.dni === dniABuscar);

    // Verificar si se encontró al paciente
    if (pacienteEncontrado) {
        // Llamar a la función para mostrar los detalles del paciente en el HTML
        mostrarDetallesPaciente(pacienteEncontrado);
    } else {
        // Si no se encuentra, mostrar un mensaje de error
        alert(`No se encontró ningún paciente con el DNI: ${dniABuscar}`);
    }
}

// Función para mostrar los detalles del paciente en el HTML
function mostrarDetallesPaciente(paciente) {
    // Obtener el elemento donde se mostrarán los detalles del paciente
    const pacienteDetails = document.getElementById('patient-details');

    // Limpiar el contenido anterior
    pacienteDetails.innerHTML = '';

    // Crear elementos HTML para cada detalle del paciente y agregarlos al elemento pacienteDetails
    const nombreP = document.createElement('p');
    nombreP.textContent = `Nombre: ${paciente.nombre}`;
    pacienteDetails.appendChild(nombreP);

    const apellidoP = document.createElement('p');
    apellidoP.textContent = `Apellido: ${paciente.apellido}`;
    pacienteDetails.appendChild(apellidoP);

    const fechaNacimientoP = document.createElement('p');
    fechaNacimientoP.textContent = `Fecha de Nacimiento: ${paciente.fechaNacimiento}`;
    pacienteDetails.appendChild(fechaNacimientoP);
}

