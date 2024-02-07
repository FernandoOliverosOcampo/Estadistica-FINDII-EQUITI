import config from '../../supabase/keys.js';

//Modelo que recibe los datos y los envia a la base de datos
const Modelo = {

  async descargarCSV() {
      //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
      const res = axios({
        method: "GET",
        url: "http://equitisoporte.pythonanywhere.com/descargar-ventas/",
        headers: config.headers,
        responseType: 'arraybuffer',  // Indica a Axios que esperamos una respuesta binaria
      });

      return res
  },

  async ventasPorLiderEquipo(nombre_lider_equipo){
    const res = axios({
      method: "GET",
      url:'http://equitisoporte.pythonanywhere.com/info-equipo/'+nombre_lider_equipo,
      headers: config.headers,
    });
    return res
  },

  async traerVentasRealizadasAgente(cedula) {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      //url: "http://127.0.0.1:5700/mostrar-ventas-realizadas/"+cedula,
      url: "http://equitisoporte.pythonanywhere.com/mostrar-ventas-realizadas/"+cedula,
      headers: config.headers,
    });
    return res
  },

  async traerDatosPersonalesAgente(cedula) {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      //url: "http://127.0.0.1:5700/mostrar-datos-personales/"+cedula,
      url: "http://equitisoporte.pythonanywhere.com/mostrar-datos-personales/"+cedula,
      headers: config.headers,
    });
    return res
  },

  limpiarSaltosDeLinea(texto){
    // Eliminar saltos de línea y espacios adicionales
    let textoSinEspacios = texto.replace(/\s+/g, ' ');

        // Eliminar espacios al principio y al final
    let textoLimpio = textoSinEspacios.trim();

    return textoLimpio
  },

  async actualizarDatosVenta(valores){

    const observaciones_adicionales =  this.limpiarSaltosDeLinea(valores.observaciones_adicionales)
    const observaciones_calidad =  this.limpiarSaltosDeLinea(valores.observaciones_calidad)
  
    const data_clientes = {
      compania: valores.compania,
      nombre: valores.nombre,
      dni: valores.dni,
      telefono: valores.telefono,
      correo: valores.correo,
      direccion: valores.direccion,
      fecha_nacimiento: valores.fechaNacimiento,
      cups_luz: valores.cupsLuz,
      cups_gas: valores.cupsGas,
      iban: valores.iban,
      numero_contrato: valores.numeroContrato,
      potencia: valores.potencia,
      peaje_gas: valores.peajeGas,
      llamada_calidad: valores.llamada_calidad,
      calidad_enviada: valores.calidad_enviada,
      verificacion_calidad: valores.verificacion_calidad,
      observaciones_calidad: observaciones_calidad,
      audios_cargados: valores.audios_cargados,
      estado: valores.estado,
      observaciones_adicionales : observaciones_adicionales,
      cedula: valores.cedula,
      legalizacion: valores.legalizacion,
      id_venta: valores.id_venta.trim(),
  };
      
    const res = axios({
      method: "PUT",
      url: "http://equitisoporte.pythonanywhere.com/editar-venta/",
      data: data_clientes,
      headers: config.headers,
    });
    return res
  },

  async traerTodasLasVentas() {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://equitisoporte.pythonanywhere.com/mostrar-ventas/",
      headers: config.headers,
    });
    return res
  },

}
export default Modelo;