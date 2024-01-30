import config from '../../supabase/keys.js';

const Modelo = {

    async traerVentasRealizadasAgente(cedula) {
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://192.168.10.18:5600/mostrar-ventas-realizadas/" + cedula,
            headers: config.headers,
        });
        return res
    },

    async traerDatosPersonalesAgente(cedula) {

        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://192.168.10.18:5600/mostrar-datos-personales/" + cedula,
            headers: config.headers,
        });
        return res
    }

}
export default Modelo;