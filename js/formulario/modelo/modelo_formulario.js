import config from '../../supabase/keys.js';

const Modelo = {

    async insertarVenta(fechaActual, compania, nombre, dni, telefono, correo, direccion, fechaNacimiento, cupsLuz, cupsGas, iban, datos, numeroContrato, potencia, peajeGas, observacionesVenta, cedula, liderEquipo, liderResponsable, nombreAgente, valorMantenimiento, valorTipoMantenimiento) {

        const datos_insertar_bd = {
            marca_temporal: fechaActual,
            compania: compania,
            fecha_ingreso_venta: fechaActual || 'no dado',
            nombre: nombre || 'no dado',
            dni: dni,
            telefono: telefono || 'no dado',
            correo: correo || 'no dado',
            direccion: direccion.trim() || 'no dado',
            fecha_nacimiento: fechaNacimiento || 'no dado',
            cups_luz: cupsLuz || 'no tiene',
            cups_gas: cupsGas || 'no tiene',
            iban: iban,
            base_de_datos: datos,
            numero_contrato: numeroContrato || 'no dado',
            potencia: potencia || 'no dado',
            peaje_gas: peajeGas || 'no dado',
            observaciones_venta: observacionesVenta.trim() || 'no dado',
            verificacion_calidad: 'no realizada',
            responsable_calidad: 'leidy',
            llamada_calidad: 'pendiente', //
            calidad_enviada: 'no', //
            observaciones_calidad: 'no dado', //
            lider_responsable: liderResponsable, //
            audios_cargados: 'opcion no seleccionada', //
            estado: 'pendiente', //
            observaciones_adicionales: 'no dado', //
            cedula: cedula,
            lider_equipo: liderEquipo,
            nombre_agente: nombreAgente,
            mantenimiento: valorMantenimiento || 'no aplica',
            tipo_mantenimiento: valorTipoMantenimiento || 'no aplica',
            legalizacion: 'no aplica'
        }

        const res = await axios({
            method: 'POST',
            // url: "http://equitisoporte.pythonanywhere.com/registrar-venta/",
            url: "http://equitisoporte.pythonanywhere.com/registrar-venta/",

            headers: config.headers,
            data: datos_insertar_bd
        });
        return res

    },

    async traerDatosPersonalesAgente(cedula) {

        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            // url: "http://equitisoporte.pythonanywhere.com/mostrar-datos-personales/" + cedula,
            url: "http://equitisoporte.pythonanywhere.com/mostrar-datos-personales/" + cedula,
            headers: config.headers,
        });
        return res
    },
    
}
export default Modelo;