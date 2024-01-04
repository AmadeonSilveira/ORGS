import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from '../../assets/estrela.png';
import estrelaCinza from '../../assets/estrelaCinza.png';

export default function Estrela({ onPress, desabilitada = true, preenchida, grande = false }) {
    const estilo = estilosFuncao(grande);
    const getImagem = () => {
        if(preenchida) { return estrela; }

        return estrelaCinza;
    }

    return <TouchableOpacity
            onPress={onPress} 
            disabled={desabilitada}
        >
        <Image source={getImagem()} style={estilo.estrela}></Image>
    </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande? 36 : 12,
        height: grande? 36 : 12
    }
});