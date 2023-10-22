//Datos
import { baseDatos } from "../../data/agendaDatos";
import { createSlice } from "@reduxjs/toolkit";

/*Inicialmente mi base de datos venia de un archivo y mi base de datos era el resultado
era baseDatos.getRegistros() x lo tanto eso ahora sera parte del estado inicial.*/

const initialState = {
  registrosBaseDatos: baseDatos.getRegistros(),
  datosMostrados: baseDatos.getRegistros(),
  datosBuscados: baseDatos.getRegistros(),
};

export const datosSlice = createSlice({
  name: "datos",
  initialState,
  reducers: {
    agregarDatos: (state, action) => {
      //vamos a agregar el registro a la base de datos y luego actualizar datos mostrados.
      baseDatos.agregarRegistro(
        action.payload.apellidoIngresado,
        action.payload.nombreIngresado,
        action.payload.telefonoIngresado
      );
      //Actualizo datosMostrados
      state.datosMostrados = baseDatos.getRegistros();
    },

    filtrarDatos: (state, action) => {
      const onSearch = action.payload; //
      console.log(onSearch);

      //Busco entre datos mostrados, o sea los registros de la BD
      let busquedaFiltrada = state.datosMostrados.filter(
        (item) =>
          item.nombre.includes(onSearch) ||
          item.apellido.includes(onSearch) ||
          item.nombre.includes(onSearch.toUpperCase()) ||
          item.apellido.includes(onSearch.toUpperCase()) ||
          item.telefono.includes(onSearch)
      );

      //Asigno los datos filtrados.
      state.datosBuscados = busquedaFiltrada;
    },
  },
});

export const { funcion1, sincronizarDatos, agregarDatos, filtrarDatos } =
  datosSlice.actions;

export default datosSlice.reducer;
