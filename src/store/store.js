import { configureStore } from "@reduxjs/toolkit";
import  datosSlice  from "../features/datos/datosSlice";

const store = configureStore({
    reducer:{
        datos : datosSlice

    }
})

export default store

