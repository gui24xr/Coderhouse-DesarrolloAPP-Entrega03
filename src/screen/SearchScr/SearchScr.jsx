import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { HeadBar, SubHeader, SearchInput, ListaContactos } from '../../components'
import { baseDatos } from '../../data/agendaDatos'
import styles from './SearchScr.styles'


const SearchScr = () => {

  const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros());
  const [onSearch, SetOnSearch] = useState("");

  useEffect(() => {
    let busquedaFiltrada = baseDatos
      .getRegistros()
      .filter(
        (item) =>
          item.nombre.includes(onSearch) ||
          item.apellido.includes(onSearch) ||
          item.nombre.includes(onSearch.toUpperCase()) ||
          item.apellido.includes(onSearch.toUpperCase()) ||
          item.telefono.includes(onSearch)
      );

    if (busquedaFiltrada.length > 0) setDatosMostrados(busquedaFiltrada);
    else alert("No existen datos")
  }, [onSearch]);

  return (
    <>
      <HeadBar/>
      <SubHeader />
      <SearchInput SetOnSearch={SetOnSearch}/>
      <ListaContactos datosMostrados={datosMostrados} screen={''}/>
    </>
  )
}

export default SearchScr

