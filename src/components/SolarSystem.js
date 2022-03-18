import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const planetas = Planets.map((cadaPlaneta) => (
      <PlanetCard
        key={ cadaPlaneta.name }
        planetName={ cadaPlaneta.name }
        planetImage={ cadaPlaneta.image }
      />
    ));
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <section className="planet">{planetas}</section>
      </>
    );
  }
}

export default SolarSystem;

// requisito 2 do projeto: importei o React, criei o componente SolarSystem através da class, coloquei o render para o código poder funcionar, mostrar na tela, e o retorno, com a tag div que vai englobar todo o conteúdo, com o atributo data-testid. Depois, exportei o SolarSystem para poder ser renderizado no App.js que é o componente principal.
// requisito 4: importei o componente Title na linha 2, depois, dentro da tag div pertencente ao componente SolarSystem chamei o componente Title e a props headline com o valor "Planetas". O componente Title está dentro de uma tag pq ele é como se fosse uma tag, ele é uma tag especial e passamos a props como se fosse um atributo da tag pq ele está dentro do Title.
// requisito 6: importei o componente PlanetCard e o planets do data. Dentro do render, antes do return, para poder criar um array novo com o nome e a imagem de cada item da lista de planetas, criei uma const planetas para poder rodar o map no planets. Aí dentro do map abri uma arrow function, coloquei o parâmetro, aí abri a tag (pq depois eu vou chamar ele dentro do return e preciso que ele volte lá em html) e chamei o PlanetCard e como forma de atributos, eu passei a key (chave) com o nome do planeta, pq cada elemento tem que ter uma chave com um nome diferente, e como os planetas não se repetem dá certo, aí passei as props planetName com o parâmetro.name (pq quero o nome lá do arquivo planets do data) e o planetImage com o parâmetro.image. Com isso meu novo array vai estar criado, aí dentro do return eu coloquei uma tag section chamando a minha constante criada acima para poder funcionar e aparecer na tela os planetas com seus nomes.
