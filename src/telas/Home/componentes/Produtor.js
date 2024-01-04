import React, { useReducer, useMemo } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";

import Texto from '../../../componentes/Texto';
import Estrelas from "../../../componentes/Estrelas";

const distanciaEmMetros = (distancia) => {
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }){
    // const [ selecionado, setSelecionado ] = useState(false);

    //forma otimizada de fazer a troca de estado de um item
    const [ selecionado, inverterSelecionado ] = useReducer( (selecionado) => !selecionado, false);

    //useMemo é utilizado para salvar o valor na memória para não encher de dados e pesar a aplicação
    const distanciaTexto = useMemo(() => distanciaEmMetros(distancia), [distancia]);

    return <TouchableOpacity style={estilos.cartao} onPress={inverterSelecionado}>
        <Image source={imagem} accessibilityLabel={nome} style={estilos.imagem}/>
        <View style={estilos.informacoes}>
            <View>
                <Texto style={estilos.nome}>{ nome }</Texto>
                <Estrelas editavel={selecionado} quantidade={estrelas} grande={selecionado}/>
            </View>
            <Texto style={estilos.distancia}>{ distanciaTexto }</Texto>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4, //propriedade de sombra do android
        //IOS sombra
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 26,
        fontWeight: "bold"
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
});