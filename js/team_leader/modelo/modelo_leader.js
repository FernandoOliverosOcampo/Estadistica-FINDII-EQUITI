import config from '../../supabase/keys.js';

const Modelo = {

    async traerVentasRealizadasAgente(cedula) {
        console.log("ejecutando esta")
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://equitisoporte.pythonanywhere.com/mostrar-ventas-realizadas/" + cedula,
            headers: config.headers,
        });
        return res
    },

    async infoEquipo(liderEquipo) {
        console.log("ejecutando info equipo")
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://equitisoporte.pythonanywhere.com/info-equipo/" + liderEquipo,
            headers: config.headers,
        });
        return res
    },

    async traerDatosPersonalesAgente(cedula) {

        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://equitisoporte.pythonanywhere.com/mostrar-datos-personales/" + cedula,
            headers: config.headers,
        });
        return res
    },

    async agentesPertenecientes(liderEquipo) {

        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://equitisoporte.pythonanywhere.com/agentes-pertenecientes/" + liderEquipo,
            headers: config.headers,
        });
        return res
    },

    async mostrarEstadisticas(cedula) {
        const res = axios({
            method: "GET",
            url: "http://equitisoporte.pythonanywhere.com/estadisticas/" + cedula,
            headers: config.headers,
        });
        return res
    }

}
export default Modelo;