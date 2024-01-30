import config from '../../supabase/keys.js';

//Modelo que recibe los datos y los envia a la base de datos
const Modelo = {

  async traerTodasLasVentas() {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://127.0.0.1:5600/mostrar-ventas/",
      headers: config.headers,
    });
    return res
  },


  async ventasPorLiderEquipo(nombre_lider_equipo){
    const res = axios({
      method: "GET",
      url:'http://127.0.0.1:5600/info-equipo/'+nombre_lider_equipo,
      headers: config.headers,
    });
    return res
  },

  async traerVentasRealizadasAgente(cedula) {
    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://127.0.0.1:5600:5600/mostrar-ventas-realizadas/"+cedula,
      headers: config.headers,
    });
    return res
  },

  async traerDatosPersonalesAgente(cedula) {

    //se almacena la respuesta en "res" para obtener el resultado de la petición y retornarla para mostrar en la vista
    const res = axios({
      method: "GET",
      url: "http://127.0.0.1:5600:5600/mostrar-datos-personales/"+cedula,
      headers: config.headers,
    });
    return res
  },

  async actualizarDatosVenta(valores){


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
      observaciones_calidad: valores.observaciones_calidad,
      audios_cargados: valores.audios_cargados,
      estado: valores.estado,
      observaciones_adicionales : valores.observaciones_adicionales,
      cedula: valores.cedula,
      id_venta: valores.id_venta
  };
    
    const res = axios({
      method: "PUT",
      url: "http://127.0.0.1:5600/editar-venta/",
      data: data_clientes,
      headers: config.headers,
    });
    return res
  }

}
export default Modelo;