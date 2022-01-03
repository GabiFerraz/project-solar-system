import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h5 data-testid="mission-name">{name}</h5>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
      </div>);
  }
}

MissionCard.propTypes = { name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired };
export default MissionCard;

// requisito 9: importei o React e o PropTypes, criei o componente MissionCard através da class, coloquei o render para o código poder funcionar, mostrar na tela. Criei uma const com os nomes name, year, country e destination desestruturados e informei que eles são props através do this.props. Aí fiz o retorno, com a tag div que vai englobar todo o conteúdo com o atributo data-testid. Aí dentro da div, coloquei a tag h5 com o atributo data-testid com a prop name para renderizar o texto recebido por ela. Aí, ainda dentro da tag div, coloquei a tag p com o atributo data-testid com a prop year para renderizar o texto recebido por ela, e repeti o processo mais 2x com o country e destination. Depois, coloquei o componente.propTypes para informar que o name, year, country e destination são props necessárias do tipo string. Por último, exportei o PlanetCard para poder ser renderizado no componente Missions.
