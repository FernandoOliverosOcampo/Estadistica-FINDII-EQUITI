import config from '../../supabase/keys.js';

const Modelo = {

    async traerVentasRealizadasAgente(cedula) {
        console.log("ejecutando esta")
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://127.0.0.1:5700/mostrar-ventas-realizadas/" + cedula,
            headers: config.headers,
        });
        return res
    },

    async infoEquipo(liderEquipo) {
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://127.0.0.1:5700/info-equipo/" + liderEquipo,
            headers: config.headers,
        });
        return res
    },

    async traerDatosPersonalesAgente(cedula) {
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://127.0.0.1:5700/mostrar-datos-personales/" + cedula,
            headers: config.headers,
        });
        return res
    },

    async agentesPertenecientes(liderEquipo) {
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://127.0.0.1:5700/agentes-pertenecientes/" + liderEquipo,
            headers: config.headers,
        });
        return res
    },

    async mostrarEstadisticas(cedula) {
        const res = axios({
            method: "GET",
            url: "http://127.0.0.1:5700/estadisticas/" + cedula,
            headers: config.headers,
        });
        return res
    }

}
export default Modelo;
