import Modelo from "../modelo/home_modelo.js"
import Vista from "../vista/home.js"
const Controlador = {

  async ventasRealizadasAgente() {
    const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))

    console.log(localStorage.getItem('cedula'))

    Vista.mostrarTablaDatos(res)
    Vista.datosEstadisticos(res)
  },

  async datosAgenteGraficas() {
    const res = await Modelo.traerVentasRealizadasAgente(localStorage.getItem('cedula'))
    Vista.mostrarGraficas(res)
  },

  async editarventa() {
    try {
      const valores = Vista.editarVenta();
      const res = await Modelo.actualizarDatosVenta(valores);
      let mensaje = "Se actualizo el registro de la venta correctamente";
      Vista.mostrarAlertaSatisfactorio(mensaje);

    } catch (error) {
      console.log(error)
      let mensaje = "Hubo un error al actualizar la venta";
      Vista.mostrarMensajeError(mensaje)
    }
  },


}
export default Controlador;