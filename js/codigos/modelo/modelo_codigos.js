import config from "../../supabase/keys.js";
const Modelo = {
    async traerInfoCodigosPostales(codigo) {
        //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
        const res = axios({
            method: "GET",
            url: "http://soporteequiti.pythonanywhere.com/info-codigo/" + codigo,
            headers: config.headers,
        });
        return res

    }
}
export default Modelo;