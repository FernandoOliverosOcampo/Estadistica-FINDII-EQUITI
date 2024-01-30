import Vista from "../vista/formulario_agente.js";
import Modelo from "../modelo/modelo_agente.js";
const Controlador ={
    async insertarDatosAgente(){
        const  {apodo, nombre, cedula, correo, celular, estado, grupo, campaña, liderResponsable, liderEquipo, contraseña} = Vista.enviarDatosAgente()
        try {
            await Modelo.insertarAgente(apodo, nombre, cedula, correo, celular, estado, grupo, campaña, liderResponsable, liderEquipo, contraseña)
            let mensaje = "Los datos fueron insertados correctamente"
            Vista.mostrarAlertaSatisfactorio(mensaje)
            
        } catch (error) {
            console.log(error)
            let mensaje = "Error al insertar los datos"
            Vista.mostrarMensajeError(mensaje)
            
        }

    },
  
}
export default Controlador;