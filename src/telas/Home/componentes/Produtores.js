import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Texto from '../../../componentes/Texto';
import Produtor from "./Produtor";

//hook personalizado
import useProdutores from "../../../hooks/useProdutores";

export default function Produtores({ topo: Topo }){
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo />
            <Texto style={estilos.titulo}>{ titulo } </Texto>
        </> 
    }

    return <FlatList 
        data={lista}
        renderItem={({ item }) => <Produtor {...item}/>}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={ TopoLista }
    />
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }
});