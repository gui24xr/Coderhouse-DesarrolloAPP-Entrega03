import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import {
  HeadBar,
  SubHeader,
  SearchInput,
  ListaContactos,
} from "../../components";
import { baseDatos } from "../../data/agendaDatos";
import styles from "./SearchScr.styles";
import { useSelector } from "react-redux";

const SearchScr = ({ navigation, route }) => {
  //const [datosMostrados, setDatosMostrados] = useState(baseDatos.getRegistros());
  //const [onSearch, SetOnSearch] = useState("");
  const datosBuscados = useSelector((state) => state.datos.datosBuscados);

  return (
    <>
      <HeadBar title="Messenger" />
      <SubHeader navigation={navigation} />
      <SearchInput />

      <ListaContactos
        datosMostrados={datosBuscados}
        formaRenderizado={"allContacts"}
      />
    </>
  );
};

export default SearchScr;
