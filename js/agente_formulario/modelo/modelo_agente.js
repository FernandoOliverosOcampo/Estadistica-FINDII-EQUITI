import config from "../../supabase/keys.js";

const Modelo = {
    async insertarAgente(apodo, nombre, cedula, correo, celular, estado, grupo, campaña, liderResponsable, liderEquipo, contraseña){
        const data_agentes = {
            apodo: apodo,
            nombre: nombre,
            cedula: cedula,
            correo: correo,
            celular: celular,
            estado: estado,
            grupo: grupo,
            campana: campaña,
            lider_responsable: liderResponsable,
            lider_equipo: liderEquipo,
            rol: 'agente',
            contrasena: contraseña
        }

        console.log(data_agentes)

        const res = await axios (
            {
                method:"POST",
                url:"http://192.168.10.18:5600/registro-agente/",
                headers: config.headers,
                data: data_agentes
            }
        )
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
    },

}
export default Modelo