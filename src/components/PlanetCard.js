import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <h3 data-testid="planet-name">{planetName}</h3>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>);
  }
}

PlanetCard.propTypes = { planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired };
export default PlanetCard;

// requisito 5: importei o React e o PropTypes, criei o componente PlanetCard através da class, coloquei o render para o código poder funcionar, mostrar na tela. Criei uma const com os nomes planetName e planetImage desestruturado e informei que eles são props através do this.props. Aí fiz o retorno, com a tag div que vai englobar todo o conteúdo com o atributo data-testid. Aí dentro da div, coloquei a tag h3 com o atributo data-testid com a prop planetName para renderizar o texto recebido por ela. Aí, ainda dentro da tag div, coloquei a tag img que vai renderizar uma imagem com o atributo src recebendo o valor da prop planetImage e, o atributo alt com o texto escrito Planeta e a prop planetName em template literals. Depois, coloquei o componente.propTypes para informar que o planetName e planetImage são props necessárias do tipo string. Por último, exportei o PlanetCard para poder ser renderizado no SolarSystem.
