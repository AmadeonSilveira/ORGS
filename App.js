import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

//componetes personalizados
import Cesta from './src/telas/Cesta';
import Home from './src/telas/Home';

//mocks servem para fornecer dados dando como exemplo dados recebidos do banco ou APIs, assim conseguimos ter uma ideia da estrutura
//mocks servem para testes automatizados
import mock from './src/mocks/cesta'

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if(!fonteCarregada) { 
    //ver sobre splash-sreen, apploading está depreciada
    return <AppLoading /> 
  }

  return (
    //SafeAreaView - faz com que ele se adapte a qualquer tela
    //StatusBar - importada direto do react native, ela se adapta melhor aos dispositivos
    //... na frente do mock, descontroi o objeto mock[0]
    //O flex 1 na SafeAreaView junto com a FlatList, faz que somente os elementos visíveis na tela sejam carregados, otimizando o carregamento
    <SafeAreaView style={{ flex: 1 }}> 
      <StatusBar />
      {/* <Cesta {...mock}/> */}
      <Home />
    </SafeAreaView>
  );
}
