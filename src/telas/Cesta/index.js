import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Texto from "../../componentes/Texto";

//componentes personalizados de cesta
import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";

//topo e detalhes, estão sendo passados pelo mock no App.js
//FlatList não pode estar dentro de um scrollView
export default function Cesta({ topo, detalhes, itens }) {
    return <>    
        <FlatList
            data={itens.lista}
            renderItem={Item}
            keyExtractor={( {nome} ) => nome }
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo}/>
                    <View style={estilos.cesta}>
                        <Detalhes {...detalhes}/>
                        <Texto style={estilos.titulo}>{itens.titulo}</Texto>
                    </View>
                </>
            }}
        />
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },  
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});