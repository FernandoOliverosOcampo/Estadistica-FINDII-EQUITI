import Modelo from "../modelo/modelo_admin.js";
import Vista from "../vista/admin.js";
const Controlador = {
  async ventasPorLiderEquipo() {
    const ventas_miguel = await Modelo.ventasPorLiderEquipo("miguel");
    const ventas_ray = await Modelo.ventasPorLiderEquipo("ray");
    const ventas_davina = await Modelo.ventasPorLiderEquipo("davina");
    const ventas_laureano = await Modelo.ventasPorLiderEquipo("laureano");

    Vista.mostrarGraficas(
      ventas_miguel,
      ventas_ray,
      ventas_davina,
      ventas_laureano
    );
    Vista.datosEstadisticos(
      ventas_miguel,
      ventas_ray,
      ventas_davina,
      ventas_laureano
    );
  },

  async mostrarTodasLasVentas() {
    const res = await Modelo.traerTodasLasVentas();
    Vista.mostrarTodasLasVentas(res);
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
};
export default Controlador;
