import { useState, useEffect } from "react";

import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores() {
    //inicia o estado das variáveis, recebe dois paramentros, o primeiro é o valor e o segundo é a ação de atualizar dado
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);
    
    //se o segundo parametro do useEffect estiver vazio, carrega assim que a função for chamada
    //uma alternativa dos métodos de ciclo de vida(componentDidMount) usado no topo, os métodos são especificos para classe
    //useEffect pode ser utilizado em uma função, é considerado um hook
    useEffect(() => {
        const retorno = carregaProdutores();

        // ordena a listagem de produtores pela menor distância
        retorno.lista.sort( (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,);

        // ordena a listagem de produtores por ordem alfabética
        // retorno.lista.sort( (produtor1, produtor2) => produtor1.titulo - produtor2.titulo,);

        //atualiza os valores das variáveis
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    return [titulo, lista];
}