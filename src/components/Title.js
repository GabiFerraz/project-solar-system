import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (<h2>{headline}</h2>);
  }
}

Title.propTypes = { headline: PropTypes.string.isRequired };
export default Title;

// requisito 3 do projeto: importei o React, importei o PropTypes, criei o componente Title através da class, coloquei o render para o código poder funcionar, mostrar na tela. Criei uma const com o nome headline desestruturado (fiz assim pq o lint obriga, se não ele vai reclamar) e informei que ele é uma prop através do this.props. Aí coloquei o retorno, com a tag h2 englobando a prop headline que vai renderizar o texto recebido por ela. Depois, coloquei o componente.propTypes para informar que o headline é uma prop necessária do tipo string, e por último exportei o Title para poder ser renderizado depois dentro do componente SolarSystem. Tudo depois do return é HTML por padrão, aí para colocar JS tem que ser entre {}!!!
// como ele é um componente genérico, onde irá renderizar o valor que a prop dele receber, ele irá ser utilizado 2 vezes, em dois outros componentes diferentes, para poder gerar os nomes principais: Planetas e Missões.
