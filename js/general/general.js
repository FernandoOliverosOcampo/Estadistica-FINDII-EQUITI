import Controlador from "./controlador/controlador_general.js";
const General = {

    horaActual() {
        // Función para obtener la hora actual y actualizar el elemento correspondiente
        const currentTimeElement = document.getElementById('horaActual');
        const now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
    
        let ampm = 'am';
    
        // Convertir a formato de 12 horas
        if (hours > 12) {
            hours -= 12;
            ampm = 'pm';
        }
    
        // Formato: HH:MM:SS
        const currentTimeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    
        // Actualizar el contenido del elemento
        currentTimeElement.textContent = currentTimeString;
    },

    datosAgente(res) {

        const menuNombreAgente = document.getElementById('menuNombreAgente')
        const menuRolUsuario = document.getElementById('menuRolUsuario')

        const parrafoNombreAgente = document.createElement('p')
        const textoNombreAgente = document.createTextNode(res.data.nombre)

        parrafoNombreAgente.appendChild(textoNombreAgente)


        const parrafoRolAgente = document.createElement('p')
        const textoRolAgente = document.createTextNode(res.data.rol)

        parrafoRolAgente.appendChild(textoRolAgente)


        menuNombreAgente.appendChild(parrafoNombreAgente)
        menuRolUsuario.appendChild(parrafoRolAgente)

    },

}

export default General;

document.addEventListener('DOMContentLoaded', function () {
    Controlador.datosAgente()
    // General.opcionesMenu()
})