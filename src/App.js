import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </>
    );
  }
}

export default App;

// para completar o requisito 1, eu importei meu componente Header na linha 2, aí chamei ele para ser renderizado na linha 10, dentro do return da class App, que é o componente principal. Coloquei a tag vazia <> para o lint não reclamar que tem muita coisa junta no return. Ela é uma tag sem nome que tá englobando todo o código. Não vai aparecer no final de tudo lá no inspect.
// para completar o requisito 2, eu importei meu componente SolarSystem na linha 3.
// para completar o requisito 7, eu importei o componente Missions na linha 4.
