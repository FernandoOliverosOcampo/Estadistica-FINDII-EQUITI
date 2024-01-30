import config from '../../supabase/keys.js';

//Modelo que recibe los datos y los envia a la base de datos
const Modelo = {
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