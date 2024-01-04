import React from "react";
import { StyleSheet, View, Image } from "react-native";

import Texto from "../../../componentes/Texto";
import { carregaTopo } from "../../../servicos/carregaDados";

import logo from '../../../../assets/logo.png'

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: '',
            legenda: ''
        }
    }

    //atualiza os dados do topo utilizando o setState
    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    //quando o componente carrega, uma vez só
    componentDidMount() {
        this.atualizaTopo();
    }
    //outros componentes de clico de vida:
    //componentDidUpdate: executa quando o componente recebe alguma atualização, não é executado no primeiro carregamento
    //componentWillUnmount: executa quando o componente é removido da tela
    //componentDidCatch: executa quando a aplicação encontra alguma erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos
    //OBS: só conseguem ser usado em classes

    render() {
        return <View style={ estilos.topo }>
            <Image source={ logo } style={ estilos.imagem }/>
            <Texto style={ estilos.boasVindas }>{ this.state.topo.boasVindas }</Texto>
            <Texto style={ estilos.legenda }>{ this.state.topo.legenda }</Texto>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,        
        color: "#A3A3A3"
    }
});

export default Topo;