import Vista from "../vista/calidad.js";
import Modelo from "../modelo/modelo_calidad.js";
const Controlador = {

    async editarventa() {
        try {
          const valores = Vista.editarVenta();
          const res = await Modelo.actualizarDatosVenta(valores);
          if (res.status == 200){
            Vista.mostrarAlertaSatisfactorio("Se actualizo el registro de la venta correctamente");
            Vista.recargarPagina();
          }else{
            Vista.mostrarMensajeError("Error al actualizar la venta")
          }
        } catch (error) {
          console.log(error)
          let mensaje = "Hubo un error al actualizar la venta";
          Vista.mostrarMensajeError(mensaje)
        }
      },

    async mostrarTodasLasVentas() {
        const res = await Modelo.traerTodasLasVentas();
        Vista.mostrarTodasLasVentas(res);
      },
      
}
export default Controlador